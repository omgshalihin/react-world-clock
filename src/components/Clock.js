import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

const Clock = (props) => {
  const setZone = props.data;
  const currentTime = DateTime.now().setZone(setZone).toFormat("HH:mm:ss");
  const [time, setTime] = useState(currentTime);
  useEffect(() => {
    var timerID = setInterval(() => setTime(currentTime), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  return (
    <div>
      <h1>{setZone}</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default Clock;
