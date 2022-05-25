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
  const changeStatus = (id) => {
    fetch(`http://localhost:5000/purchase/status/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
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
        {!paid && (
          <div class="badge badge-primary">unpaid</div>
        )}
        {paid && (
          <div class="badge badge-success">paid</div>
        )}
      </td>
      <td>
        {paid && status !== 'Shipped' && (
          <button
            className="btn btn-secondary btn-xs"
            onClick={() => changeStatus(_id)}
          >
            Shipped
          </button>
        )}
        {!paid && (
          <label
            for="delete-order"
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
