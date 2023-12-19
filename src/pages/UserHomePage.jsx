import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Welcome from '../components/main/Welcome.jsx'
import MoviesList from '../components/movies/MoviesList.jsx';
import './Pages.css'
import GenreForm from '../components/main/GenreForm.jsx';

function UserHomePage (){

	const { user } = useParams();
	const location = useLocation();
	const { state } = location;
	const form = GenreForm;

	const [movies, setMovies] = useState([]);

	const findMovies = (movies) => {
		setMovies(movies);
		console.log(movies);
	}

	const saveMovie = (favorite) => {
		console.log(favorite);
	}

	return (
		<div className='user-home-page-container'>
            <Welcome name={user} form={form} findMovies={(movies) => findMovies(movies)}/>
			<MoviesList movies={movies} saveMovie={saveMovie}/>
		</div>
	)
}

export default UserHomePage;