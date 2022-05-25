import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import PartsList from './PartsList';

const Parts = () => {
  const { data, isLoading } = useQuery('parts', () =>
    axios.get('https://serene-bayou-83359.herokuapp.com/parts')
  );

  if (isLoading) {
    return <p className='text-center py-10 text-xl'>Loading...</p>;
  }

  const parts = data?.data;

  return (
    <div className="pb-24  px-3">
      <h2 className="text-lg lg:text-2xl uppercase font-semibold text-primary text-center pb-8">
        collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:max-w-7xl mx-auto">
        {parts.map((part) => (
          <PartsList key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
