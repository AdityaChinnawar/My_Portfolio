import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import './skillfrontstyle.css';

const useAsyncProgress = (targetProgress) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        return nextProgress >= targetProgress ? targetProgress : nextProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [targetProgress]);

  return progress;
};

const Skillfront = ({ percentage, text }) => {
  const progress = useAsyncProgress(percentage);

  return (
    <div>
      <div style={{ width: 200, height: 200, padding: 10}}>
        <CircularProgressbar value={progress} text={text} />
      </div>
    </div>
  );
};

export default Skillfront;
