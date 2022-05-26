import notFoundphoto from '../../../assets/218128-P17MNV-918.jpg';
import PageTitle from '../../Shared/PageTitle';

const NotFound = () => {
  return (
    <>
      <PageTitle title="Not found" />
      <div className="max-w-xs lg:max-w-lg mx-auto mt-20">
        <img src={notFoundphoto} alt="not found page" />
      </div>
    </>
  );
};

export default NotFound;
