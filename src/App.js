import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
