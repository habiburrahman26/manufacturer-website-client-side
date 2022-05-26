import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import profile from '../../../assets/profile.jpg';
import location from '../../../assets/icon/location-svgrepo-com (1).svg';
import education from '../../../assets/icon/education-svgrepo-com.svg';
import phone from '../../../assets/icon/phone-svgrepo-com.svg';
import linkedin from '../../../assets/icon/linkedin-svgrepo-com.svg';
import EditProfile from './EditProfile';
import PageTitle from '../../Shared/PageTitle';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [showEdit, setShowEdit] = useState(false);
  const { data, isLoading, isError, error, refetch } = useQuery(
    ['user-data', user],
    () => {
      if (user?.email) {
        return axios.get(`http://localhost:5000/user/${user?.email}`);
      }
    }
  );

  if (loading || isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p className="text-lg font-bold text-center">{error.message}</p>;
  }

  const handleEdit = () => {
    setShowEdit((prevState) => !prevState);
  };

  return (
    <>
      <PageTitle title="My Profile" />
      <div className="flex flex-col items-center">
        <div className="avatar mb-5">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL || profile} alt="" />
          </div>
        </div>
        <div className="text-center max-w-2xl">
          {!showEdit && (
            <>
              <h2 className="text-xl lg:text-2xl font-semibold">
                {user?.displayName}
              </h2>
              <h2 className="text-base lg:text-xl mb-3">{user?.email}</h2>
              {data?.data.bio && <p className="text-sm">{data?.data.bio}</p>}
              {data?.data.education && (
                <div className="flex justify-center items-center gap-2 text-base mt-3">
                  <img src={education} alt="" className="w-4 h-4" />
                  <p>{data?.data.education}</p>
                </div>
              )}
              {data?.data.location && (
                <div className="flex justify-center items-center gap-2 text-base">
                  <img src={location} alt="" className="w-4 h-4" />
                  <p>{data?.data.location}</p>
                </div>
              )}
              {data?.data.phone && (
                <div className="flex justify-center items-center gap-2 text-base">
                  <img src={phone} alt="" className="w-4 h-4" />
                  <p>{data?.data.phone}</p>
                </div>
              )}
              {data?.data.linkedin && (
                <div className="flex justify-center items-center gap-2 text-base">
                  <img src={linkedin} alt="" className="w-4 h-4" />
                  <p>{data?.data.linkedin}</p>
                </div>
              )}
            </>
          )}
          {!showEdit && (
            <button
              className="btn btn-outline btn-accent btn-sm mt-4"
              onClick={handleEdit}
            >
              Edit Profile
            </button>
          )}
        </div>
        {showEdit && (
          <EditProfile
            setShowEdit={setShowEdit}
            showEdit={setShowEdit}
            {...data?.data}
            name={user?.displayName}
            email={user?.email}
            refetch={refetch}
          />
        )}
      </div>
    </>
  );
};

export default MyProfile;
