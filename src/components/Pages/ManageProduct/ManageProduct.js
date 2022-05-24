import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import DeleteModal from './DeleteModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    'all-parts',
    () =>
      axios.get('http://localhost:5000/parts', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
  );
  const [showModal, setShowModal] = useState(null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(showModal);

  return (
    <div className="max-h-[600px] mt-10 overflow-auto">
      <div className="overflow-auto max-w-sm px-3 md:max-w-3xl lg:max-w-6xl">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((p, i) => (
              <ProductRow
                key={p._id}
                sl={i + 1}
                _id={p._id}
                name={p.name}
                image={p.image}
                availableQuantity={p.availableQuantity}
                unitPrice={p.unitPrice}
                setShowModal={setShowModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <DeleteModal showModal={showModal} refetch={refetch} />}
    </div>
  );
};

export default ManageProduct;
