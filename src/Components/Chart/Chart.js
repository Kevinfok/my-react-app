import react from "react";
import "./Chart.css"
import ChartBar from "ChartBar";
const Chart = (props) => {
  return (
    <div>
      {props.datePoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.key}
          value={dataPoint.Value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
