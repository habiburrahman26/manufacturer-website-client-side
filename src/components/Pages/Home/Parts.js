import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import PartsList from './PartsList';

const Parts = () => {
  const { data, isLoading } = useQuery('parts', () => axios.get('parts.json'));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-20 px-3">
      <h2 className="text-lg lg:text-3xl uppercase font-semibold text-primary text-center pb-5">
        Our Parts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:max-w-7xl mx-auto">
        {data?.data.map((part) => (
          <PartsList key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
