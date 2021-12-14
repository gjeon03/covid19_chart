import { atom} from "recoil";

export enum CityTitles {
	"서울" = "서울",
	"부산" = "부산",
	"대구" = "대구",
	"인천" = "인천",
	"광주" = "광주",
	"대전" = "대전",
	"울산" = "울산",
	"세종" = "세종",
	"경기" = "경기",
	"강원" = "강원",
	"충북" = "충북",
	"충남" = "충남",
	"전북" = "전북",
	"전남" = "전남",
	"경북" = "경북",
	"경남" = "경남",
	"제주" = "제주",
	"검역" = "검역",
}

export const cityTitlesState = atom<CityTitles>({
	key: "countryName",
	default: CityTitles.서울,
})
