import React from "react";
import Clock from "./Clock";

const Board = () => {
  const zoneNamesList = [
    "America/New_York",
    "Europe/Stockholm",
    "Europe/London",
    "Africa/Kinshasa",
    "Asia/Kolkata",
    "Asia/Singapore",
  ];
  return (
    <div>
      {zoneNamesList.map((key, index) => (
        <div key={index}>
          <Clock data={key} />
        </div>
      ))}
    </div>
  );
};

export default Board;
