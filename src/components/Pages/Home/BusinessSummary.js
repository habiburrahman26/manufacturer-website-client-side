import React from 'react';
import like from '../../../assets/icon/like-svgrepo-com.svg';
import people from '../../../assets/icon/people-svgrepo-com.svg';
import flag from '../../../assets/icon/flag-svgrepo-com.svg';
import register from '../../../assets/icon/register-svgrepo-com.svg';
import parts from '../../../assets/icon/motherboard-svgrepo-com.svg';

const BusinessSummary = () => {
  return (
    <div className="py-24">
      <h2 className="text-xl lg:text-2xl uppercase font-semibold text-primary text-center pb-8">
        Thousand of business trusted us
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-between max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto border-2 px-8 py-6 rounded-lg">
        <div className="flex flex-col items-center gap-3 lg:pr-14 lg:border-r-2">
          <p>
            <img src={flag} alt="" className="w-10 h-10" />
          </p>
          <p className="text-2xl lg:text-4xl font-bold">26+</p>
          <p className="text-xl text-secondary text-semibold">Countries</p>
        </div>
        <div className="flex flex-col items-center gap-3 lg:pr-10 lg:border-r-2">
          <p>
            <img src={people} alt="" className="w-10 h-10" />
          </p>
          <p className="text-2xl lg:text-4xl font-bold">106+</p>
          <p className="text-xl text-secondary text-semibold">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center gap-3 lg:pr-10 lg:border-r-2">
          <p>
            <img src={like} alt="" className="w-10 h-10" />
          </p>
          <p className="text-2xl lg:text-4xl font-bold">12k+</p>
          <p className="text-xl text-secondary text-semibold">Feedbacks</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:pr-10 md:border-r-2">
          <p>
            <img src={register} alt="" className="w-10 h-10" />
          </p>
          <p className="text-2xl lg:text-4xl font-bold">100+</p>
          <p className="text-xl text-secondary text-semibold">New Register</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p>
            <img src={parts} alt="" className="w-10 h-10" />
          </p>
          <p className="text-2xl lg:text-4xl font-bold">40+</p>
          <p className="text-xl text-secondary text-semibold">Parts</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
