export interface ICity {
	countryName: string;
	newCase: number;
	totalCase: number;
	recovered: number;
	death: number;
	percentage: number;
	newCcase: number;
	newFcase: number;
}

export interface ICitys {
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