import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Routes/Main";

function Router() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/*" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
}
export default Router;