import ApexChart from "react-apexcharts";
import { ICitys, ICity } from "../types/cityData";

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
					Number(caseResult) | 0,
					Number(cityData?.newFcase) | 0]
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
				colors: ['#33b2df', '#90ee7e'],
				dataLabels: {
					enabled: true,
					textAnchor: 'start',
					style: {
						colors: ['#fff']
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
					colors: ['#fff']
				},
				xaxis: {
					categories: ['국내', '해외유입'],
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
				subtitle: {
					text: 'Category Names as DataLabels inside bars',
					align: 'center',
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