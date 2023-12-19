import React from 'react';
import './Movies.css';

const basePosterUrl = 'https://image.tmdb.org/t/p/w300'; 

function Movie (props){

    const path = `${basePosterUrl}${props.movie.poster_path}`

    const handleClick = () => {
        props.saveMovie(props.movie.title);
    }

	return (
		<div>
            <img className='poster' src={path} alt='movie' onClick={handleClick}></img>
		</div>
	)
}

export default Movie;