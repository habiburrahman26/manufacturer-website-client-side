import React from 'react';

const OrderRow = ({sl, productName, buyer, quantity, totalPrice}) => {
  return (
    <tr>
      <th>{sl}</th>
      <td>{productName}</td>
      <td>{buyer}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
    </tr>
  );
};

export default OrderRow;
