import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import OrderCancelModal from './OrderCancelModal';
import OrdersRow from './OrdersRow';
import AxiosPrivate from '../../../API/AxiosPrivate';

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [showCancelModal, setShowCancelModal] = useState(null);

  const { data, isLoading, isError, error, refetch } = useQuery(
    ['my-orders', user],
    () => {
      const email = user?.email;
      if (email) {
        return AxiosPrivate.get(`https://serene-bayou-83359.herokuapp.com/purchase?email=${email}`);
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
    <div className="max-h-[500px] lg:max-w-[1100px] mt-8 overflow-auto">
      <div className="overflow-auto max-w-sm px-3 md:max-w-2xl lg:max-w-6xl">
        {data?.data.length !== 0 && (
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((p, i) => (
                <OrdersRow
                  key={p._id}
                  sl={i + 1}
                  {...p}
                  setShowCancelModal={setShowCancelModal}
                />
              ))}
            </tbody>
          </table>
        )}
        {data?.data.length === 0 && (
          <p className="text-lg lg:text-2xl font-bold text-center">
            Opps! No Order yet
          </p>
        )}
        {showCancelModal && (
          <OrderCancelModal
            showCancelModal={showCancelModal}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
