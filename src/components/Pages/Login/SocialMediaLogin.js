import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const SocialMediaLogin = ({ setSocialIsLoading }) => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full my-3">
      <button
        type="submit"
        className="btn hover:bg-accent btn-outline w-full"
        onClick={() => signInWithGoogle()}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialMediaLogin;
