import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AxiosPrivate from '../../../API/AxiosPrivate';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import PageTitle from '../../Shared/PageTitle';
import UserRow from './UserRow';

const AllUser = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    'all-user',
    () => AxiosPrivate.get('http://localhost:5000/user')
  );

  const [searchByEmail, setSearchByEmail] = useState('');

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p className="text-xl font-bold text-center">{error.message}</p>;
  }

  const users = data?.data.filter((u) =>
    u?.email.toLowerCase().includes(searchByEmail.toLowerCase())
  );

  return (
    <div>
      <PageTitle title="Users" />
      <div className="text-center">
        <input
          type="text"
          placeholder="Search by Email..."
          className="input input-bordered w-full max-w-xs lg:max-w-md mb-4"
          onChange={(e) => setSearchByEmail(e.target.value)}
        />
      </div>
      <div className="max-h-[600px] mt-10 overflow-auto">
        <div className="overflow-auto max-w-sm px-3 md:max-w-2xl lg:max-w-5xl">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <UserRow
                  key={u._id}
                  sl={i + 1}
                  _id={u._id}
                  email={u.email}
                  name={u.name}
                  role={u.role}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
