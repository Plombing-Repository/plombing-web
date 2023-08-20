import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = (props) => {
  const tmpProgress = props.progress;
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    function simulateProgress() {
      setTimeout(() => {
        setPercentage(tmpProgress);
      }, 1000);
    }
    simulateProgress();

    const timer = setInterval(
      () => {
        if (percentage < tmpProgress) {
          setPercentage((prevPercentage) => prevPercentage + 1);
        } else {
          clearInterval(timer);
        }
      },
      (15 / tmpProgress) * 100,
    );
    return () => clearInterval(timer);
  }, [percentage]);
  return (
    <div
      style={{
        width: 'fitContent',
        height: 'fitContent',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={12}
        styles={{
          // Customize the root svg element
          root: { width: '140px', height: '140px' },
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `#76E481`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            // Customize transition animation
            transition: 'stroke-dashoffset 1s ease 0s',
            // Rotate the path
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: 'rgba(255,255,255,0)',

            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
            strokeWidth: '14px',
          },
          // Customize the text
          text: {
            // Text color
            fill: '#000',
            // Text size
            fontSize: '1rem',
            fontWeight: '500',
          },
        }}
      />
    </div>
  );
};

export default Progress;
