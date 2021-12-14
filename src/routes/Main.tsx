import styled from "styled-components";
import { useQuery } from "react-query";
import { useMatch, Link, Routes, Route } from "react-router-dom";
import { fetchTotal, fetchCity } from "../api";
import Domestic from "./Domestic";
import { ITotal } from "../types/totalData";
import { ICitys } from "../types/cityData";
import {
	Container,
	Header,
	Title,
	Tabs,
	Tab
} from "../styles/main";

function Main() {
	const { isLoading: totalLoading, data: totalData } = useQuery<ITotal>("total", fetchTotal);
	const { isLoading: cityLoading, data: cityData } = useQuery<ICitys>("city", fetchCity);
	const domesticData = {
		totalLoading,
		cityLoading,
		totalData,
		cityData
	};
	const domesticMatch = useMatch("/domestic");
	const regionMatch = useMatch("/region");
	return (
		<Container>
			<Header>
				<Title>COVID-19</Title>
			</Header>
			<Tabs>
				<Tab isActive={domesticMatch !== null}>
					<Link to="domestic">국내</Link>
				</Tab>
				<Tab isActive={regionMatch !== null}>시·도</Tab>
			</Tabs>
			<Routes>
				<Route path="domestic" element={<Domestic {...domesticData} />} />
				{/* <Route path="region" element={<Domestic {cityLoading, cityData} />} /> */}
			</Routes>
		</Container>
	);
}

export default Main;