import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DonutChart = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        if (newPercentage > 75) {
          clearInterval(interval);
          return 75; // stop at 75%
        }
        return newPercentage;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'round',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#3e98c7',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
    </div>
  );
};

export default DonutChart;