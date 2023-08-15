import { Route, Routes } from "@solidjs/router";
import HomePage from "./pages/HomePage";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" component={HomePage} />
			</Routes>
		</>
	);
}
