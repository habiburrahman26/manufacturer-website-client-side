import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurServices from './OurServices';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
  return (
    <>
      <Banner />
      <BusinessSummary />
      <Parts />
      <OurServices />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
