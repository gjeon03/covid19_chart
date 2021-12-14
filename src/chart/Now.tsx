import ApexChart from "react-apexcharts";

interface ICity {
	countryName: string;
	newCase: number;
	totalCase: number;
	recovered: number;
	death: number;
	percentage: number;
	newCcase: number;
	newFcase: number;
}

interface ICitys {
	resultCode: string;
	resultMessage: string;
	korea: ICity;
	seoul: ICity;
	busan: ICity;
	daegu: ICity;
	incheon: ICity;
	gwangju: ICity;
	daejeon: ICity;
	ulsan: ICity;
	sejong: ICity;
	gyeonggi: ICity;
	gangwon: ICity;
	chungbuk: ICity;
	chungnam: ICity;
	jeonbuk: ICity;
	jeonnam: ICity;
	gyeongbuk: ICity;
	gyeongnam: ICity;
	jeju: ICity;
	quarantine: ICity;
}

interface IProps {
	cityData?: ICitys;
}

function Now({ cityData }: IProps) {
	console.log(cityData);
	const koreaCcase = cityData?.korea.newCcase;
	const caseResult = String(koreaCcase).replace(",", "");
	return (
		<ApexChart
			type="bar"
			series={[{
				data: [
					Number(caseResult) | 0,
					Number(cityData?.korea.newFcase) | 0]
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