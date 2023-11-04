import React, { useEffect } from 'react';

const SlowScrolling = ({ children }) => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      // Adjust the divisor to control the scroll speed
      window.scrollTo(0, window.scrollY + e.deltaY / 2.5);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return <div>{children}</div>;
};

export default SlowScrolling;