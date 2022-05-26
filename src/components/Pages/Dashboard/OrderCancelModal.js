import AxiosPrivate from '../../../API/AxiosPrivate';
import React from 'react';
import { toast } from 'react-toastify';

const OrderCancelModal = ({ showCancelModal, refetch }) => {
  const { _id, name } = showCancelModal;

  const deleteOrder = (id) => {
    AxiosPrivate.put(`http://localhost:5000/order/purchase/${id}`)
      .then(() => {
        AxiosPrivate.delete(`http://localhost:5000/purchase/${id}`).then(
          ({ data }) => {
            if (data.deletedCount > 0) {
              toast.success(`Your order ${name} deleted successfully`);
            }
            refetch();
          }
        );
      });
  };

  return (
    <div>
      <input type="checkbox" id="cancel-order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="font-semibold text-red-400 text-base">
            Are You sure you want to delete {name}?
          </p>
          <div className="modal-action">
            <label
              htmlFor="cancel-order-modal"
              className="btn btn-secondary btn-sm"
              onClick={() => deleteOrder(_id)}
            >
              Ok
            </label>
            <label htmlFor="cancel-order-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelModal;
