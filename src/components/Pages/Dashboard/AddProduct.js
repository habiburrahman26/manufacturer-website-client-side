import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AxiosPrivate from '../../../API/AxiosPrivate';
import PageTitle from '../../Shared/PageTitle';

const img_key = '3ad55ab9434d8720265796ab760a0977';

const AddProduct = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    setIsLoading(true);
    fetch(`https://api.imgbb.com/1/upload?key=${img_key}`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(({ data: result }) => {
        if (result.url) {
          const parts = {
            name: data.productName,
            description: data.description,
            minimumOrderQuantity: data.orderquantity,
            availableQuantity: data.quantity,
            unitPrice: data.unitPrice,
            image: result.url,
          };

          AxiosPrivate.post('https://serene-bayou-83359.herokuapp.com/parts', parts).then(
            ({ data }) => {
              if (data.insertedId) {
                toast.success('Parts added successfully');
                navigate('/dashboard/manageProducts', { replace: true });
              }
            }
          );
        }

        setIsLoading(false);
      });
  };

  return (
    <>
      <PageTitle title="Add Product" />
      <div className="shadow-lg max-w-lg lg:w-[450px] p-8 mx-auto -mt-12">
        <h1 className="text-3xl text-center mb-6">Add New Product</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              className="input input-bordered input-sm w-full max-w-sm"
              type="text"
              {...register('productName', {
                required: {
                  value: true,
                  message: 'Product name is Required',
                },
              })}
            />
            <label className="label -mb-4">
              {errors.productName?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.productName.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Unit Price</span>
            </label>
            <input
              className="input input-bordered input-sm w-full max-w-sm"
              type="number"
              {...register('unitPrice', {
                required: {
                  value: true,
                  message: 'Unit Price name is Required',
                },
              })}
            />
            <label className="label -mb-4">
              {errors.unitPrice?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.unitPrice.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              className="input input-bordered input-sm w-full max-w-sm"
              type="number"
              min="1"
              {...register('quantity', {
                required: {
                  value: true,
                  message: 'Quantity is Required',
                },
              })}
            />
            <label className="label -mb-4">
              {errors.quantity?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              className="input input-bordered input-sm w-full max-w-sm"
              type="number"
              min="1"
              {...register('orderquantity', {
                required: {
                  value: true,
                  message: 'Order quantity is Required',
                },
              })}
            />
            <label className="label -mb-4">
              {errors.orderquantity?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.orderquantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              className="input input-bordered w-full max-w-sm"
              type="file"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />
            <label className="label -mb-4">
              {errors.name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is Required',
                },
              })}
            ></textarea>
            <label className="label -mb-4">
              {errors.description?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <button className="btn bg-accent text-white mt-4 w-full max-w-sm">
            {isLoading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
