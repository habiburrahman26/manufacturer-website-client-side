import React, { useState, useEffect } from 'react';

export default function ScreenSize() {
  const [minWidth, detectHW] = useState(window.innerWidth);

  const detectSize = () => {
    detectHW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [minWidth]);

  return {minWidth};
}
