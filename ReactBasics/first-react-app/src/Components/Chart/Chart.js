import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    //console.log(props)
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaxim = Math.max(...dataPointValues);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaxim}
					label={dataPoint.label}
				></ChartBar>
			))}
		</div>
	);
};
export default Chart;
