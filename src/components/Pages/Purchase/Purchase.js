import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [user, loading] = useAuthState(auth);

  const { data, isLoading, isError, error,refetch } = useQuery(['part-by-id', id], () =>
    axios.get(`https://serene-bayou-83359.herokuapp.com/parts/${id}`)
  );

  if (isLoading || loading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p className="text-center text-lg">{error.message}</p>;
  }

  const {
    name,
    description,
    unitPrice,
    image,
    minimumOrderQuantity,
    availableQuantity,
  } = data?.data;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:max-w-5xl lg:mx-auto shadow-lg rounded-lg mt-10 px-3 lg:px-10 lg:py-5">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div>
          <h3 className="text-lg font-semibold pb-4">{name}</h3>
          <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
          <p>Available Quantity: {availableQuantity}</p>
          <p>Unit Price: {unitPrice}Tk</p>
          <label
            htmlFor="purchase-modal"
            className="btn border-0 bg-gradient-to-r from-primary to-secondary modal-button mt-8 lg:mt-16"
            onClick={() => setShowModal(true)}
          >
            Place order
          </label>
        </div>
        <div className="p-2">
          <p className="text-center p-2 bg-base-200">Description</p>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>

      {showModal && (
        <PurchaseModal
          setShowModal={setShowModal}
          parts={data?.data}
          {...user}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Purchase;
