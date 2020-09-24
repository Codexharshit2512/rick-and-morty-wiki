import React, { useState, useEffect } from "react";

const ProgressBar = ({ count }) => {
  const [progressWidth, setWidth] = useState(1);

  useEffect(() => {
    console.log("current count bkc ", count);
    if (count >= 1) setWidth(20 * count);
  }, [count]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
