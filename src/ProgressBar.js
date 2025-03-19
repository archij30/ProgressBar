import { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-filled"
        style={{ transform: `translateX(${animatedProgress - 100}%)` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
