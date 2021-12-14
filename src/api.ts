const TOTAL_URL = `https://api.corona-19.kr/korea/?serviceKey=${process.env.REACT_APP_API_KEY}`;
const CITY_URL = `https://api.corona-19.kr/korea/country/new/?serviceKey=${process.env.REACT_APP_API_KEY}`;

export function fetchTotal() {
	return fetch(`${TOTAL_URL}`).then((response) => response.json());
}

export function fetchCity() {
	return fetch(`${CITY_URL}`).then((response) => response.json());
}