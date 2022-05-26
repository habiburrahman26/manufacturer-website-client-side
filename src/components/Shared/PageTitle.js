import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Computer Store -{title}</title>
    </Helmet>
  );
};

export default PageTitle;
