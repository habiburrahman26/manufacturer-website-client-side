import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
  return (
    <>
      <Banner />
      <Parts />
      <BusinessSummary />
      <Review />
      <Footer/>
    </>
  );
};

export default Home;
