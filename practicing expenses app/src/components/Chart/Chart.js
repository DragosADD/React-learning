import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={totalMaximum}
          label={el.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
