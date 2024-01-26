import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1; // Months are zero-based, so add 1
  const day = currentTime.getDate();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  return (
    <div>{`${year}-${month}-${day} | ${hours}:${minutes}:${seconds}.`}</div>
  );
};

export default Clock;
