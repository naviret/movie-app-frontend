import React from 'react';
import './Welcome.css';


function Welcome (props){

	return (
		<div className='welcome-container'>
            <div className='welcome-header'>
                <div className='welcome-text'>
                    Welcome back <span>{props.name}</span>
                </div>
            </div>
            <props.form findMovies={(movies) => props.findMovies(movies)}/>
		</div>
	)
}

export default Welcome;