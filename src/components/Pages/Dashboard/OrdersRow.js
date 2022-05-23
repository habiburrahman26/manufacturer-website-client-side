import React from 'react';

const OrdersRow = ({
  sl,
  name,
  quantity,
  unitPrice,
  totalPrice,
  paid = true,
}) => {
  return (
    <tr>
      <th>{sl}</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{unitPrice}</td>
      <td>{totalPrice}</td>
      <td>
        {totalPrice && !paid && (
          <button className="btn btn-xs btn-secondary">Pay</button>
        )}
        {totalPrice && paid && (
          <div class="text-secondary">
            <p className=''>paid </p>
            <p>transactionId:79748347328</p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
