import { useState } from 'react';
import { toast } from 'react-toastify';
import AxiosPrivate from '../../../API/AxiosPrivate';

const img_key = '3ad55ab9434d8720265796ab760a0977';

const UploadPhotoModal = ({ _id, setUploadPhoto, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState('');

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const image = file;
    const formData = new FormData();
    formData.append('image', image);

    setIsLoading(true);
    fetch(`https://api.imgbb.com/1/upload?key=${img_key}`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(({ data: result }) => {
        if (result.url) {
          AxiosPrivate.put('https://serene-bayou-83359.herokuapp.com/user/uploadPhoto', {
            id: _id,
            img: result.url,
          }).then(({ data }) => {
            if (data.modifiedCount > 0) {
              toast.success('photo updeted successfully');
            }
            refetch();
            setUploadPhoto(false);
          });
        }
        setIsLoading(false);
      });
  };

  return (
    <div>
      <input type="checkbox" id="upload-photo-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="upload-photo-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setFile('')}
          >
            ✕
          </label>

          <div className="flex justify-center mb-4">
            {file && <ImageThumb image={file} />}
          </div>
          <form onSubmit={formSubmit} className="flex flex-col items-center">
            <div className="form-control w-full max-w-xs">
              <input
                type="file"
                placeholder="LinkedIn profile link"
                className="input input-bordered input-md w-full max-w-xs"
                onChange={handleFile}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-sm mt-3"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ImageThumb = ({ image }) => {
  return (
    <img
      src={URL.createObjectURL(image)}
      alt={image.name}
      className="w-32 rounded-full"
    />
  );
};

export default UploadPhotoModal;
