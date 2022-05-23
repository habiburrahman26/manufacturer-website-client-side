import React from 'react';

const ProductRow = ({ sl, name, image, availableQuantity, unitPrice }) => {
  return (
    <tr>
      <th>{sl}</th>
      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{availableQuantity}</td>
      <td>{unitPrice}</td>
    </tr>
  );
};

export default ProductRow;
