import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const OrderCancelModal = ({ showCancelModal, refetch }) => {
  const { _id, name } = showCancelModal;

  const deleteOrder = (id) => {
    fetch(`https://serene-bayou-83359.herokuapp.com/order/purchase/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        axios
          .delete(`https://serene-bayou-83359.herokuapp.com/purchase/${id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          })
          .then(({ data }) => {
            if (data.deletedCount > 0) {
              toast.success(`Your order ${name} deleted successfully`);
            }
            refetch();
          });
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
              for="cancel-order-modal"
              className="btn btn-secondary btn-sm"
              onClick={() => deleteOrder(_id)}
            >
              Ok
            </label>
            <label for="cancel-order-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelModal;
