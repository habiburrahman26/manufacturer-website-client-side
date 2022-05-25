import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  const fromSubmit = (e) => {
    e.preventDefault();

    const review = {
      name: e.target.name.value,
      rating: e.target.rating.value,
      text: e.target.text.value,
      img: user?.photoURL,
    };

    axios
      .post('https://serene-bayou-83359.herokuapp.com/review', review, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => {
        if (data.insertedId) {
          toast.info('Review added successfully');
        }
      });
  };

  return (
    <div className="w-[320px] lg:w-[400px] shadow-lg rounded-lg px-4 py-10">
      <h2 className="text-lg lg:text-2xl text-center mb-6">Add Review</h2>
      <form className="flex flex-col items-center gap-2" onSubmit={fromSubmit}>
        <input
          type="text"
          placeholder="name"
          class="input input-bordered  w-full max-w-xs"
          value={user?.displayName}
          disabled
          readOnly
          name="name"
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating.."
          name="rating"
          class="input input-bordered  w-full max-w-xs"
          required
        />
        <textarea
          class="textarea textarea-bordered w-full max-w-xs"
          placeholder="Text.."
          name="text"
        ></textarea>
        <div className="w-full max-w-xs">
          <button
            type="submit"
            className="btn btn-accent btn-sm mt-2 w-full max-w-xs"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
