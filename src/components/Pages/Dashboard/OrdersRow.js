const OrdersRow = ({
  sl,
  _id,
  name,
  quantity,
  unitPrice,
  totalPrice,
  paid = false,
  setShowCancelModal,
}) => {
  return (
    <>
      <tr>
        <th>{sl}</th>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{unitPrice}</td>
        <td>{totalPrice}</td>
        <td>
          {totalPrice && !paid && (
            <>
              <button className="btn btn-xs btn-secondary">Pay</button>
              <label
                for="cancel-order-modal"
                class="btn btn-xs btn-error ml-2 modal-button"
                onClick={()=>setShowCancelModal({_id,name})}
              >
                Cancel
              </label>
            </>
          )}
          {totalPrice && paid && (
            <div className="text-secondary">
              <p className="">paid </p>
              <p>transactionId:79748347328</p>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrdersRow;
