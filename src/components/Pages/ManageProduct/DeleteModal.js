import axios from 'axios';
import React from 'react';

const DeleteModal = ({ showModal, refetch }) => {
  const { _id, name } = showModal;

  const deleteProduct = (_id) => {
    axios
      .delete(`http://localhost:5000/parts/${_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="product-delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-semibold text-base lg:text-lg">
            Are you sure you want to delete {name}?
          </h3>
          <div className="modal-action">
            <label
              htmlFor="product-delete-modal"
              className="btn btn-secondary btn-sm"
              onClick={() => deleteProduct(_id)}
            >
              Ok
            </label>
            <label htmlFor="product-delete-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
