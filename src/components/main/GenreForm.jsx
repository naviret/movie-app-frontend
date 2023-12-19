import React, { useEffect, useState } from 'react';
import './Movie.css';


function GenreForm (props){

	return (
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
	)
}

export default GenreForm;