import { useEffect, useState } from 'react';
import AxiosPrivate from '../API/AxiosPrivate';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      AxiosPrivate.get(`https://serene-bayou-83359.herokuapp.com/admin/${email}`).then(
        ({ data }) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        }
      );
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
