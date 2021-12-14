import ApexChart from "react-apexcharts";
import { ICity } from "../types/cityData";

interface IProps {
	cityData?: ICity;
}

function Now({ cityData }: IProps) {
	const koreaCcase = cityData?.newCcase;
	const caseResult = String(koreaCcase).replace(",", "");
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
						colors: ['#ced6e0']
					},
					formatter: function (val, opt) {
						return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
					},
					offsetX: 0,
					dropShadow: {
						enabled: true
					}
				},
				stroke: {
					width: 1,
					colors: [`#f1f2f6`]
				},
				xaxis: {
					categories: ['해외유입', '국내'],
					axisBorder: { show: false },
					axisTicks: { show: false },
					labels: { show: false },
				},
				grid: { show: false },
				yaxis: {
					labels: {
						show: false
					}
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

export default Now;