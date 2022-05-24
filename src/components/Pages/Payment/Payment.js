import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L11VUKpp75QzPF5AX4GkWywzNVUY6ojd80zMtdOqo1sxM5u2XOqCdU6qkrWqVpdah1ri3YsFD58yplkK9LA7Rpb00ktxHilRF'
);

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery('payment-order', () =>
    axios.get(`http://localhost:5000/purchase/${id}`)
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p className="text-lg text-center font-semibold">{error.message}</p>;
  }

  const { productName, buyer, buyerName, totalPrice, quantity } = data?.data;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mb-10">
        <div class="card-body">
          <p className="font-semibold">
            Product Name: <span className="text-orange-400">{productName}</span>
          </p>
          <p className="font-semibold">Quantiy: {quantity}</p>
          <p className="font-semibold">
            Total Price: <span>{totalPrice}Tk</span>
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              price={totalPrice}
              buyer={buyer}
              buyerName={buyerName}
              id={id}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
