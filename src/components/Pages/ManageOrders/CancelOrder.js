import React from 'react';
import { toast } from 'react-toastify';
import AxiosPrivate from '../../../API/AxiosPrivate';

const CancelOrder = ({ showModal, refetch }) => {
  const { _id } = showModal;

  const deleteOrder = (id) => {
    AxiosPrivate
      .delete(`http://localhost:5000/purchase/${id}`)
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
              htmlFor="delete-order"
              className="btn btn-secondary btn-sm"
              onClick={() => deleteOrder(_id)}
            >
              Ok
            </label>
            <label htmlFor="delete-order" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
