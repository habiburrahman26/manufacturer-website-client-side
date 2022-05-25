import truck from '../../../assets/icon/truck-svgrepo-com.svg';
import helping from '../../../assets/icon/helping-wounded-man-svgrepo-com.svg';
import card from '../../../assets/icon/card-svgrepo-com.svg';
import donation from '../../../assets/icon/donation-svgrepo-com.svg';

const OurServices = () => {
  return (
    <div className="pb-24">
      <h2 className="text-lg lg:text-2xl uppercase font-semibold text-primary text-center pb-8">
        Our services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 lg:px-28">
        <div className="flex flex-col items-center border-2 px-4 py-4">
          <img src={donation} alt="" className="w-8 h-8" />
          <h3 className='text-lg font-semibold py-2'>Great Value</h3>
          <p>We offer competitive prices on over 100 million items.</p>
        </div>
        <div className="flex flex-col items-center border-2 px-4 py-4">
          <img src={truck} alt="" className="w-8 h-8" />
          <h3 className='text-lg font-semibold py-2'>Worldwide shifting</h3>
          <p>
            We ship to over 200 countries and regions, and our site comes in 12
            languages.
          </p>
        </div>
        <div className="flex flex-col items-center border-2 px-4 py-4">
          <img src={card} alt="" className="w-8 h-8" />
          <h3 className='text-lg font-semibold py-2'>Safe payment</h3>
          <p>Pay with the world’s most popular and secure payment methods.</p>
        </div>
        <div className="flex flex-col items-center border-2 px-4 py-4">
          <img src={helping} alt="" className="w-8 h-8" />
          <h3 className='text-lg font-semibold py-2'>Help center</h3>
          <p>Round-the-clock assistance for a smooth shopping experience.</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
