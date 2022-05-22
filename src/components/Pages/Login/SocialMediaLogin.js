import React, { useEffect } from 'react';
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import google from '../../../assets/icon/google-svgrepo-com.svg';
import facebook from '../../../assets/icon/facebook-svgrepo-com.svg';
import useToken from '../../../hooks/useToken';

const SocialMediaLogin = ({ setSocialIsLoading }) => {
  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading] = useSignInWithFacebook(auth);

  const { token } = useToken(gUser || fUser);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (gLoading || fLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex justify-center gap-4">
      <button
        type="submit"
        className="btn border-primary  btn-outline"
        onClick={() => signInWithGoogle()}
      >
        <img src={google} className="w-6 h-6" alt="" />
      </button>
      <button
        type="submit"
        className="btn border-primary  btn-outline"
        onClick={() => signInWithFacebook()}
      >
        <img src={facebook} className="w-6 h-6" alt="" />
      </button>
    </div>
  );
};

export default SocialMediaLogin;
