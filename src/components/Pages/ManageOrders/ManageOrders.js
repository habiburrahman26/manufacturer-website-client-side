import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import OrderRow from './OrderRow';

const ManageOrders = () => {
  const { data, isLoading, isError, error } = useQuery('all-orders', () =>
    axios.get('http://localhost:5000/order', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className='max-h-[600px] mt-10 overflow-auto'>
      <div className="overflow-auto max-w-sm px-3 md:max-w-3xl lg:max-w-6xl">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Product name</th>
              <th>Buyer</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((p, i) => (
              <OrderRow
                key={p._id}
                sl={i + 1}
                _id={p._id}
                buyer={p.buyer}
                productName={p.productName}
                quantity={p.quantity}
                totalPrice={p.totalPrice}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
