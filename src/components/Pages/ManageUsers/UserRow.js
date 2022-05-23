import React from 'react';

const UserRow = ({ sl, email, name, role }) => {
  return (
    <tr>
      <th>{sl}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== 'admin' ? (
          <button className="btn btn-xs btn-accent">Make Admin</button>
        ) : (
          <div class="badge badge-success">admin</div>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
