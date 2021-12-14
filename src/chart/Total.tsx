import ApexChart from "react-apexcharts";

interface ITotal {
	resultCode: string;
	TotalCase: string;
	TotalRecovered: string;
	TotalDeath: string;
	NowCase: string;
	city1n: string;
	city2n: string;
	city3n: string;
	city4n: string;
	city5n: string;
	city1p: string;
	city2p: string;
	city3p: string;
	city4p: string;
	city5p: string;
	recoveredPercentage: number;
	deathPercentage: number;
	checkingCounter: number;
	checkingPercentage: number;
	caseCount: number;
	casePercentage: number;
	notcaseCount: number;
	notcasePercentage: number;
	TotalChecking: number;
	TodayRecovered: number;
	TodayDeath: number;
	TotalCaseBefore: string;
	source: string;
	updateTime: string;
	resultMessag: string;
}

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