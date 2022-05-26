import { Link } from 'react-router-dom';

const OrdersRow = ({
  sl,
  _id,
  productName: name,
  quantity,
  unitPrice,
  totalPrice,
  paid,
  transactionId,
  setShowCancelModal,
  status,
}) => {
  return (
    <>
      <tr>
        <th>{sl}</th>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{unitPrice}</td>
        <td>{totalPrice}</td>
        <td>{status || 'pending'}</td>
        <td>
          {totalPrice && !paid && (
            <>
              <Link to={`/dashboard/payment/${_id}`}>
                <button className="btn btn-xs btn-secondary">Pay</button>
              </Link>
              <label
                htmlFor="cancel-order-modal"
                className="btn btn-xs btn-error ml-2 modal-button"
                onClick={() => setShowCancelModal({ _id, name })}
              >
                Cancel
              </label>
            </>
          )}
          {totalPrice && paid && (
            <div className="text-secondary">
              <p className="">paid </p>
              <p className="text-x">TransactionId:{transactionId}</p>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrdersRow;
