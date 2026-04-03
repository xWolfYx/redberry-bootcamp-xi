import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./components/layout/Dashboard";
import Navbar from "./components/Navbar";
import "@fontsource-variable/inter/wght.css";

function App() {
	return (
		<div className="bg-gray-100 w-screen">
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				{/* <Route path="/login" element={} /> */}
				{/* <Route path="/login" element={} /> */}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
