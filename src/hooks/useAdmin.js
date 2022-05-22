import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const email = user?.email;

  const fetchData = useCallback(async () => {
    if (email) {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:5000/admin/${email}`);
      setAdmin(data.admin);
      setIsLoading(false);
    }
  }, [email]);

  useEffect(() => {
    fetchData();
  }, [email, fetchData]);


  return [admin, isLoading];
};

export default useAdmin;
