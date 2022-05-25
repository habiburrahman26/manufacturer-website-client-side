import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const CancelOrder = ({ showModal, refetch }) => {
  const { _id } = showModal;

  const deleteOrder = (id) => {
    axios
      .delete(`https://serene-bayou-83359.herokuapp.com/purchase/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => {
        if (data.deletedCount > 0) {
          toast.success(`Order deleted successfully`);
        }
        refetch();
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-order" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="font-semibold text-red-400 text-base">
            Are You sure you want to delete this order?
          </p>
          <div className="modal-action">
            <label
              for="delete-order"
              className="btn btn-secondary btn-sm"
              onClick={() => deleteOrder(_id)}
            >
              Ok
            </label>
            <label for="delete-order" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
