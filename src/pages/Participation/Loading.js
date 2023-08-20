import React, { useEffect } from 'react';
import Header from '../Home/Header';
import { useLocation } from 'react-router-dom';
const Loading = () => {
  const location = useLocation();
  const total = location.state?.total;
  const gender = location.state?.gender;
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/result';
    }, 3000);
  }, []);

  return (
    <div>
      <Header />
      {total}
      {gender}
    </div>
  );
};

export default Loading;
