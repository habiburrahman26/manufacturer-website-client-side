import { useState } from 'react';

const OrderRow = ({
  sl,
  _id,
  productName,
  buyer,
  quantity,
  totalPrice,
  status,
  paid,
  setShowModal,
  refetch,
}) => {
  const [loading, setLoading] = useState(false);

  const changeStatus = (id) => {
    setLoading(true);
    fetch(`https://serene-bayou-83359.herokuapp.com/purchase/status/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        refetch();
      });
  };

  return (
    <tr>
      <th>{sl}</th>
      <td>{productName}</td>
      <td>{buyer}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
      <td>{status || 'pending'}</td>
      <td>
        {!paid && <div className="badge badge-primary">unpaid</div>}
        {paid && <div className="badge badge-success">paid</div>}
      </td>
      <td>
        {paid && status !== 'Shipped' && (
          <button
            className="btn btn-secondary btn-xs"
            onClick={() => changeStatus(_id)}
          >
            {loading ? 'Changing...' : 'Shipped'}
          </button>
        )}
        {!paid && (
          <label
            htmlFor="delete-order"
            className="btn btn-error btn-xs modal-button"
            onClick={() => setShowModal({ _id })}
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
