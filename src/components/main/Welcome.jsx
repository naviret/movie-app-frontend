import react, { useEffect, useState } from 'react';
import './Welcome.css';


function Welcome (props){

	return (
		<div className='welcome-container'>
            <div className='welcome-header'>
                <div className='welcome-text'>
                    Welcome back <span>{props.name}</span>
                </div>
            </div>
            <div className='movie-request'>
                <div className='movie-request-header'>
                    What <span>genre</span> are you looking for today?
                </div>
                <div className='movie-request-input'>
                    {/* <img src='' alt=''/> */}
                    <input 
                        type='text' 
                        placeholder='Genre'
                        // onChange={(e) => setEmail(e.target.value.trim())}
                    />
                </div>
            </div>
		</div>
	)
}

export default Welcome;