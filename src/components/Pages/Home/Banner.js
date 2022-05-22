import React from 'react';
import pc from '../../../assets/pc-1.jpg';

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-[92vh]" style={{ backgroundImage: `url(${pc})` }}>
        <div class="hero-overlay bg-opacity-75"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold" style={{lineHeight:'1.2'}}>
              Are you ready for your next business?
            </h1>
            <p class="mb-5 text-lg">
              We are provide computers parts all over the world. With lots of
              facilitys. If you plan to start computers business we are here to
              help you.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
