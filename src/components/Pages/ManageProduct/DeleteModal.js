import React from 'react';
import { toast } from 'react-toastify';
import AxiosPrivate from '../../../API/AxiosPrivate';

const DeleteModal = ({ showModal, refetch }) => {
  const { _id, name } = showModal;

  const deleteProduct = (_id) => {
    AxiosPrivate.delete(
      `https://serene-bayou-83359.herokuapp.com/parts/${_id}`
    ).then(({ data }) => {
      if (data.deletedCount > 0) {
        toast.success('Product deleted successfully');
      }
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
