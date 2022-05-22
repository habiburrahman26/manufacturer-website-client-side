import { useForm } from 'react-hook-form';

const PurchaseModal = ({ setShowModal, parts, displayName, email }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const { name, unitPrice, image, minimumOrderQuantity, availableQuantity } =
    parts;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={()=>reset()}
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
              <button type="submit" className="btn btn-secondary max-w-sm">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
