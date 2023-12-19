import React from 'react';
import Movie from './Movie';
import './Movies.css';


function MoviesList (props){

	return (
		<div className='poster-container'> 
            {props.movies.map((movie, index) => (<Movie key={index} movie={movie} saveMovie={props.saveMovie}/>))}
        </div> 
	)
}

export default MoviesList;