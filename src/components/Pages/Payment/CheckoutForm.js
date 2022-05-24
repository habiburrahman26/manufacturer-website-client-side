import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ id, buyer, buyerName, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardErrro] = useState('');
  const [success, setSuccess] = useState('');
  const [transctionId, setTransctionId] = useState('');
  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    axios
      .post(
        'http://localhost:5000/create-payment-intent',
        { price },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      .then(({ data }) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardErrro(error.message);
      setSuccess('');
    } else {
      setCardErrro('');
    }

    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyer,
          },
        },
      });

    if (intentError) {
      setCardErrro(intentError.message);
      setSuccess('');
      setProcessing(false);
    } else {
      setSuccess('Congrats! Your Payment is completed');
      setTransctionId(paymentIntent.id);
      setCardErrro('');

      const payment = {
        purchaseId: id,
        transactionId: paymentIntent.id,
      };

      axios
        .patch(`http://localhost:5000/purchase/${id}`, payment, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then(({ data }) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="border-2 hover:border-purple-400 p-2 mb-3"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {!processing ? (
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-primary btn-sm"
        >
          Pay
        </button>
      ) : (
        <button class="btn btn-square btn-primary btn-sm loading"></button>
      )}
      {cardError && <p className="text-red-400">{cardError}</p>}
      {success && (
        <>
          <p className="text-green-400">{success}</p>
          <p className="text-green-400">
            Transction id:{' '}
            <span className="text-orange-500 font-bold">{transctionId}</span>
          </p>
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
