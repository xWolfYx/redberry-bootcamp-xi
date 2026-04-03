import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "@fontsource-variable/inter/wght.css";

function App() {
	return (
		<div className="bg-gray-100">
			<Navbar />
			<Routes>
				<Route path="/"></Route>
				<Route path="/login"></Route>
				<Route path="/login"></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
