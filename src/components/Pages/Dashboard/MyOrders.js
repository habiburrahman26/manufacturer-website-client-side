import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const { data, isLoading, isError, error } = useQuery(
    ['my-orders', user],
    () => {
      const email = user?.email;
      if (email) {
        return axios.get(`http://localhost:5000/purchase?email=${email}`);
      }
    }
  );

  if (isLoading || loading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p className="text-center text-lg font-semibold">{error.message}</p>;
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold text-center mb-6'>My Orders</h1>
      <div class="overflow-auto max-w-sm px-3 md:max-w-2xl lg:max-w-5xl">
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((p, i) => (
              <OrdersRow
                key={p._id}
                sl={i + 1}
                _id={p._id}
                name={p.productName}
                quantity={p.quantity}
                unitPrice={p.unitPrice}
                totalPrice={p.totalPrice}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
