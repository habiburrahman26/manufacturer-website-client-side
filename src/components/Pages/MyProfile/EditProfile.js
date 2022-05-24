import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditProfile = ({
  email,
  bio,
  location,
  phone,
  linkedin,
  setShowEdit,
  education,
  refetch,
}) => {
  const [updateFrom, setUpdateFrom] = useState({
    bio: bio || '',
    phone: phone || '',
    education: education || '',
    location: location || '',
    linkedin: linkedin || '',
  });
  const [updateProfileIsLoading, setUpdateProfileIsLoading] = useState(false);

  const bioChange = (e) => {
    setUpdateFrom({ ...updateFrom, bio: e.target.value });
  };
  const phoneChange = (e) => {
    setUpdateFrom({ ...updateFrom, phone: e.target.value });
  };
  const educationChange = (e) => {
    setUpdateFrom({ ...updateFrom, education: e.target.value });
  };
  const locationChange = (e) => {
    setUpdateFrom({ ...updateFrom, location: e.target.value });
  };
  const linkedinChange = (e) => {
    setUpdateFrom({ ...updateFrom, linkedin: e.target.value });
  };

  const updateProfile = async (userInfo) => {
    setUpdateProfileIsLoading(true);
    const { data } = await axios.put(
      `http://localhost:5000/user/updateProfile/${email}`,
      userInfo
    );
    if (data) {
      refetch();
      toast.success('Profile Updated Successfully');
      setShowEdit(false);
      setUpdateProfileIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(updateFrom);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[300px] lg:w-[320px] mt-2 flex flex-col gap-2 items-center"
    >
      <div className="form-control w-full max-w-xs">
        <input
          type="text"
          placeholder="Education"
          className="input input-bordered input-sm w-full max-w-xs"
          onChange={educationChange}
          value={updateFrom.education}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <textarea
          className="textarea textarea-bordered"
          placeholder="Bio"
          rows="2"
          onChange={bioChange}
          value={updateFrom.bio}
        ></textarea>
      </div>
      <div className="form-control w-full max-w-xs">
        <input
          type="number"
          placeholder="Phone"
          className="input input-bordered input-sm w-full max-w-xs"
          onChange={phoneChange}
          value={updateFrom.phone}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered input-sm w-full max-w-xs"
          onChange={locationChange}
          value={updateFrom.location}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <input
          type="text"
          placeholder="LinkedIn profile link"
          className="input input-bordered input-sm w-full max-w-xs"
          onChange={linkedinChange}
          value={updateFrom.linkedin}
        />
      </div>
      <div className="self-start mt-4">
        <button type="submit" className="btn btn-secondary btn-xs mr-4">
          {updateProfileIsLoading ? ' updating...' : 'save'}
        </button>
        <button
          className="btn btn-accent btn-xs"
          type="button"
          onClick={() => setShowEdit(false)}
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
