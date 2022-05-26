import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AxiosPrivate from '../../../API/AxiosPrivate';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import PageTitle from '../../Shared/PageTitle';
import CancelOrder from './CancelOrder';
import OrderRow from './OrderRow';

const ManageOrders = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    'all-orders',
    () => AxiosPrivate.get('https://serene-bayou-83359.herokuapp.com/order')
  );
  const [showModal, setShowModal] = useState(null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <PageTitle title="Manage Orders" />
      <div className="max-h-[500px] lg:max-w-[1100px] mt-8 overflow-auto">
        <div className="overflow-auto max-w-sm px-3 md:max-w-3xl lg:max-w-6xl">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Product name</th>
                <th>Buyer</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Action</th>
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
                  status={p.status}
                  paid={p.paid}
                  refetch={refetch}
                  setShowModal={setShowModal}
                />
              ))}
            </tbody>
          </table>
        </div>
        {showModal && <CancelOrder showModal={showModal} refetch={refetch} />}
      </div>
    </>
  );
};

export default ManageOrders;
