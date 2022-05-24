import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import UserRow from './UserRow';

const AllUser = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    'all-user',
    () => axios.get('http://localhost:5000/user')
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p className="text-xl font-bold text-center">{error.message}</p>;
  }

  return (
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
            {data?.data.map((u, i) => (
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
  );
};

export default AllUser;
