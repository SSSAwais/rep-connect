import React from "react";
import { CircleProgress } from "react-gradient-progress";
import "./CircleChart.css";
const CircleChart = () => {
  return (
    <>
      <div className="CircleProgress ">
        <div className="cirlce_pro">
          <CircleProgress
            percentage={70}
            strokeWidth={10}
            secondaryColor=" #ECF5FF"
            // primaryColor={["#3479FB", "#845adf"]}
          />
        </div>
      </div>
    </>
  );
};

export default CircleChart;
