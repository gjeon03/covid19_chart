import ApexChart from "react-apexcharts";
import { ICity } from "../types/cityData";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IProps {
	cityData?: ICity;
}

function DetailChart({ cityData }: IProps) {
	const koreaCcase = cityData?.newCcase;
	const caseResult = String(koreaCcase).replace(",", "");
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<ApexChart
			type="bar"
			series={[{
				data: [
					Number(cityData?.newFcase) | 0,
					Number(caseResult) | 0,
				]
			}]}
			options={{
				chart: {
					height: 100,
					width: 500,
					toolbar: {
						show: false,
					},
					background: "transparent",
				},
				plotOptions: {
					bar: {
						barHeight: '100%',
						distributed: true,
						horizontal: true,
						dataLabels: {
							position: 'bottom'
						},
					}
				},
				colors: ['#33b2df', '#ff4444'],
				dataLabels: {
					enabled: true,
					textAnchor: 'start',
					style: {
						colors: [isDark ? "#f5f6fa" : "#2f3640"]
					},
					offsetX: 0,
					dropShadow: {
						enabled: false
					}
				},
				stroke: {
					width: 1,
					colors: [isDark ? "#f5f6fa" : "#2f3640"]
				},
				xaxis: {
					categories: ['해외유입', '국내'],
					axisBorder: { show: true },
					axisTicks: { show: true },
					labels: {
						show: true,
						style: {
							colors: [isDark ? "#f5f6fa" : "#2f3640"]
						}
					},
				},
				grid: { show: false },
				yaxis: {
					labels: {
						show: true,
						style: {
							colors: [isDark ? "#f5f6fa" : "#2f3640"],
							fontSize: '12px',
							fontFamily: 'Helvetica, Arial, sans-serif',
							fontWeight: 400,
							cssClass: 'apexcharts-yaxis-label',
						},
					},
				},
				legend: {
					show: false
				},
				tooltip: {
					theme: 'dark',
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function () {
								return ''
							}
						}
					}
				}
			}}
		/>
	);
}

export default DetailChart;