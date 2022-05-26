import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const useToken = (user) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      setIsLoading(true);
      axios
        .put(`https://serene-bayou-83359.herokuapp.com/user/${email}`, {
          email: email,
          name: user?.user?.displayName,
        })
        .then(({ data }) => {
          localStorage.setItem('accessToken', data.accessToken);
          setToken(data.accessToken);
          setIsLoading(false);
        });
    }
  }, [user]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return { token };
};

export default useToken;
