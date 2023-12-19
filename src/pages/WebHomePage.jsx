import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css'

function Home (){
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/authenticate')
	}

	return (
		<div className='web-home-container'>
            <div className='web-home-header'>
				Movie Recommendation App
			</div>
			<p className='web-home-p'>
				This is a movie recommendation app built using the MERN 
				(MongoDB, Express, React, Node) framework. This app 
				contains a user registration/login form which stores 
				users in a MongoDB database. Note that usernames and 
				emails cannot be duplicated in the database. Upon login, 
				the user is presented with a personalized home page
				with the option to query movie recommendations from
				<b>The Movie Database (TMDB) </b> based on genre.

				In future work, I'd like to improve the recommendation
				by using ML recommendation systems like content-based 
				and collaborative filtering.
			</p>
			<div className='web-home-authenticate' onClick={handleClick}>
				Login
			</div>
		</div>
	)
}

export default Home;