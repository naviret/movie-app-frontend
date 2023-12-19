import React from 'react';
import WebHomePage from './pages/WebHomePage.jsx';
import UserHomePage from './pages/UserHomePage.jsx';
import AuthenticationPage from './pages/AuthenticationPage.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WebHomePage/>}></Route>
				<Route path="/authenticate" element={<AuthenticationPage />}></Route>
				<Route path="/home/:user" element={<UserHomePage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
