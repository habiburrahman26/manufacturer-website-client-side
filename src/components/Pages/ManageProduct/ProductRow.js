import React from 'react';

const ProductRow = ({
  sl,
  _id,
  name,
  image,
  availableQuantity,
  unitPrice,
  setShowModal,
}) => {
  return (
    <tr>
      <th>{sl}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{availableQuantity}</td>
      <td>{unitPrice}</td>
      <td>
        <label
          htmlFor="product-delete-modal"
          className="btn btn-xs btn-error modal-button"
          onClick={() => setShowModal({_id,name})}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
