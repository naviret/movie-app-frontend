import react, { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import UserHome from './pages/UserHome.jsx';
import Authenticate from './pages/Authenticate.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path="/authenticate" element={<Authenticate />}></Route>
				<Route path="/home" element={<UserHome />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

// function App() {
// 	const [backendData, setBackendData] = useState([{}]);

// 	useEffect(() => {
// 		fetch('/api')
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setBackendData(data);
// 			});
// 	}, []);

// 	// useEffect performs side effects on functional components
// 	// sideeffects are not directly involved with rendering some UI,
// 	// but are needed for the component to accomplish its goals
// 	// used to manage state and lifecycle methods --> basically replace classes
// 	// useEffect takes two arguments: 1) function containing code for side effects
// 	// and 2) list of dependencies (if empty, only runs when the component mounts and
// 	// not on subsequent renders)
// 	// useEffect hook can be used to fetch data from some server
// 	// fetch returns a Promise, which is an initiation of a network request
// 	// this means the fetch is asynchronous, and thus returns a Promise for
// 	// completion of some request, AT whcih point a Response is ent
// 	// fetch is usually chained with .then method which activates once
// 	// a promise is fullfilled
// 	// .then is a callback method does something once a Response is received
// 	// using .json method to parse response as JSON
// 	// .then is used again to update state
// 	// .then can return another Promise or a value, chained .thens will behave
// 	// the same on a Promise

// 	return (
// 		<div>
// 			{(typeof backendData.users === 'undefined') ? (
// 				<p>Loading...</p>
// 			) : (
// 				backendData.users.map((user, i) => <p key={i}>{user}</p>)
// 			)}
// 		</div>
// 	);
// }

export default App;
