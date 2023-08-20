import React, { useEffect } from 'react';
import Header from '../Home/Header';
import { useLocation, useNavigate } from 'react-router-dom';
const Loading = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total;
  const gender = location.state?.gender;
  const progress = 65;
  const kcal = 525;
  useEffect(() => {
    setTimeout(() => {
      navigate('/result', {
        state: {
          total,
          progress,
          kcal,
        },
      });
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
