import React from 'react';

const OrderCancelModal = (props) => {
  const { _id, name } = props.showCancelModal;

  return (
    <div>
      <input type="checkbox" id="cancel-order-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <p class="font-semibold text-red-400 text-base">
            Are You sure you want to delete {name}?
          </p>
          <div class="modal-action">
            <label for="cancel-order-modal" class="btn btn-secondary btn-sm">
              Ok
            </label>
            <label for="cancel-order-modal" class="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelModal;
