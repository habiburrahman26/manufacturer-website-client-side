import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import SocialMediaLogin from '../Login/SocialMediaLogin';
import auth from '../../../firebase.init'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true });
    }
  }, [user,navigate]);

  if (loading || updating) {
    return <LoadingSpinner />;
  }

  let errorContent = <></>;
  if (error || updateError) {
    errorContent = (
      <p className="text-red-400">{error.message || updateError.message}</p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div className="max-w-xs lg:max-w-md mx-auto mt-10 shadow-lg rounded-xl p-6">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl lg:text-3xl mb-6 text-center">Sign Up</h2>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            className="input input-bordered w-full max-w-sm"
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
          />
          {errors.name?.type === 'required' && (
            <small className="text-red-400">{errors.name.message}</small>
          )}
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full max-w-sm"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is Required',
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Enter valid email',
              },
            })}
          />
          {errors.email?.type === 'required' && (
            <small className="text-red-400">{errors.email.message}</small>
          )}
          {errors.email?.type === 'pattern' && (
            <small className="text-red-400">{errors.email.message}</small>
          )}
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-sm"
            {...register('password', {
              required: {
                value: true,
                message: 'password is Required',
              },
              minLength: {
                value: 6,
                message: 'password must be gretter than 6 characters',
              },
            })}
          />
          {errors.password?.type === 'required' && (
            <small className="text-red-400">{errors.password.message}</small>
          )}
          {errors.password?.type === 'minLength' && (
            <small className="text-red-400">{errors.password.message}</small>
          )}
          <label className="label">
            <span className="label-text-alt text-xs">Forget password?</span>
          </label>
        </div>
        {errorContent}
        <div className="w-full">
          <button type="submit" className="btn mt-3 w-full">
            Sign up
          </button>
        </div>
        <p className="text-md mt-6 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider text-sm">OR</div>
        </div>
        {/* sign in with Google */}
        <SocialMediaLogin />
      </form>
    </div>
  );
};

export default Signup;
