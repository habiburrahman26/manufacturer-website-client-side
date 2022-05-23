import { toast } from 'react-toastify';

const UserRow = ({ sl, email, name, role, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`${email} is now admin`);
        }
        refetch();
      });
  };

  return (
    <tr>
      <th>{sl}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== 'admin' ? (
          <button className="btn btn-xs btn-accent" onClick={makeAdmin}>
            Make Admin
          </button>
        ) : (
          <div class="badge badge-success">admin</div>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
