import ApexChart from "react-apexcharts";
import { ITotal } from "../types/totalData";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IProps {
	totalData?: ITotal;
}

function TotalChart({ totalData }: IProps) {
	const other = 100 - (
		Number(totalData?.city1p)
		+ Number(totalData?.city2p)
		+ Number(totalData?.city3p)
		+ Number(totalData?.city4p)
		+ Number(totalData?.city5p)
	)
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<ApexChart
			type='donut'
			series={[
				Number(totalData?.city1p),
				Number(totalData?.city2p),
				Number(totalData?.city3p),
				Number(totalData?.city4p),
				Number(totalData?.city5p),
				Number(other.toFixed(1)),
			]}
			options={{
				labels: [
					totalData?.city1n || "",
					totalData?.city2n || "",
					totalData?.city3n || "",
					totalData?.city4n || "",
					totalData?.city5n || "",
					"기타",
				],
				legend: {
					show: true,
					labels: {
						colors: [isDark ? "#f5f6fa" : "#2f3640"]
					}
				},
				responsive: [{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: 'bottom'
						}
					}
				}],
				colors: [
					"#008FFB",
					"#01E396",
					"#FEB019",
					"#FF4560",
					"#775DD0",
					"#9b9b9b",
				]
			}}
		/>
	);
}

export default TotalChart;