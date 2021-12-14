import ApexChart from "react-apexcharts";
import { ITotal } from "../types/totalData";

interface IProps {
	totalData?: ITotal;
}

function Total({ totalData }: IProps) {
	return (
		<ApexChart
			type='donut'
			series={[
				Number(totalData?.city1p),
				Number(totalData?.city2p),
				Number(totalData?.city3p),
				Number(totalData?.city4p),
				Number(totalData?.city5p)
			]}
			options={{
				labels: [
					totalData?.city1n || "",
					totalData?.city2n || "",
					totalData?.city3n || "",
					totalData?.city4n || "",
					totalData?.city5n || "",
				],
				legend: {
					show: false
				}
			}}
		/>
	);
}

export default Total;