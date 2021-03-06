import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AxiosPrivate from '../../../API/AxiosPrivate';

const CheckoutForm = ({ id, buyer, buyerName, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transctionId, setTransctionId] = useState('');
  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    AxiosPrivate.post('https://serene-bayou-83359.herokuapp.com/create-payment-intent', {
      price,
    }).then(({ data }) => {
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

    setCardError(error?.message || '');
    setSuccess('');
    setProcessing(true);
    
    // confirm card payment
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
      setCardError(intentError.message);
      setSuccess('');
      setProcessing(false);
    } else {
      setSuccess('Congrats! Your Payment is completed');
      setTransctionId(paymentIntent.id);
      setCardError('');

      const payment = {
        purchaseId: id,
        transactionId: paymentIntent.id,
      };

      AxiosPrivate.patch(`https://serene-bayou-83359.herokuapp.com/purchase/${id}`, payment).then(
        ({ data }) => {
          setProcessing(false);
        }
      );
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
        <button className="btn btn-square btn-primary btn-sm loading"></button>
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
