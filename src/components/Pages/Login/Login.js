import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import SocialMediaLogin from './SocialMediaLogin';
import useToken from '../../../hooks/useToken';
import PageTitle from '../../Shared/PageTitle';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const { token } = useToken(user);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
   <>
   <PageTitle title="Login"/>
    <div className="max-w-xs lg:max-w-md mx-auto mt-10 shadow-lg rounded-xl p-6">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl lg:text-3xl mb-6 text-center">Login</h2>
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
        <p className="text-red-400">{error?.message}</p>
        <div className="w-full">
          <button type="submit" className="btn mt-3 w-full">
            Login
          </button>
        </div>
        <p className="text-md mt-6 text-center">
          New to Doctors Portal?{' '}
          <Link to="/signup" className="text-secondary">
            Create account
          </Link>
        </p>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider text-sm">OR</div>
        </div>
        {/* Sign in with google */}
        <SocialMediaLogin />
      </form>
    </div>
   </>
  );
};

export default Login;
