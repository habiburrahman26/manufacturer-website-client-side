import axios from 'axios';
import { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PurchaseModal = ({
  setShowModal,
  parts,
  displayName,
  email,
  refetch,
}) => {
  const { _id, name, unitPrice, minimumOrderQuantity, availableQuantity } =
    parts;

  const [quantity, setQuantity] = useState(minimumOrderQuantity);
  const [quantityError, setQuantityError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const onSubmit = (data) => {
    if (+quantity < minimumOrderQuantity) {
      setQuantityError(`You can't order less than ${minimumOrderQuantity}`);
      return;
    }

    if (+quantity > availableQuantity) {
      console.log('gretter');
      setQuantityError(`You can't order more than ${availableQuantity}`);
      return;
    }

    const purchase = {
      productId: _id,
      productName: name,
      buyer: email,
      buyerName: displayName,
      phone: data.phone,
      address: data.address,
      unitPrice: unitPrice,
      totalPrice: +quantity * +unitPrice,
      quantity: quantity,
      status: 'pending',
    };

    setIsLoading(true);
    axios.put('http://localhost:5000/purchase', purchase).then(({ data }) => {
      if (data.insertedId) {
        setIsLoading(false);
        toast.success(`You order ${name} place Successfully`);
        setShowModal('');
        refetch();
      }
    });
  };

  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              reset();
              setQuantity(minimumOrderQuantity);
              setQuantityError('');
            }}
          >
            ✕
          </label>
          <h3 className="font-semibold text-base">{name}</h3>
          <form
            className="flex flex-col items-center mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                value={displayName}
                disabled
                readOnly
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                value={email}
                disabled
                readOnly
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs"
                {...register('quantity', {
                  required: true,
                })}
                value={quantity}
                onChange={handleQuantity}
              />
              {errors.quantity?.type === 'required' && (
                <span className="label-text-alt text-red-400">
                  Quantity is Required
                </span>
              )}
              {quantityError && (
                <span className="label-text-alt text-red-400">
                  {quantityError}
                </span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs"
                {...register('phone', { required: true })}
              />
              {errors.phone && (
                <span className="label-text-alt text-red-400">
                  Phone is Required
                </span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 max-w-xs"
                {...register('address', { required: true })}
              ></textarea>
              {errors.address && (
                <span className="label-text-alt text-red-400">
                  Address is Required
                </span>
              )}
            </div>

            <div className="form-control w-full max-w-xs mt-4">
              <button
                type="submit"
                className="btn btn-secondary max-w-sm"
                disabled={isLoading ? true : false}
              >
                {isLoading ? 'Confirm...' : 'Confirm'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
