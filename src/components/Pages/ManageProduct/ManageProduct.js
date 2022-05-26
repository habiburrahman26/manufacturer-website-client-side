import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AxiosPrivate from '../../../API/AxiosPrivate';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import PageTitle from '../../Shared/PageTitle';
import DeleteModal from './DeleteModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    'all-parts',
    () => AxiosPrivate.get('https://serene-bayou-83359.herokuapp.com/parts')
  );
  const [showModal, setShowModal] = useState(null);
  const [search, setSearch] = useState('');

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const products = data?.data.filter((p) =>
    p?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageTitle title="Manage Product" />
      <div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Search by product name..."
            className="input input-bordered w-full max-w-xs lg:max-w-md mb-4"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="max-h-[600px] pt-4 overflow-auto">
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
                {products.map((p, i) => (
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
      </div>
    </>
  );
};

export default ManageProduct;
