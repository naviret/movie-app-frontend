import React, { useEffect, useState } from 'react';
import './Welcome.css';

const URI = "http://localhost:4000";

function GenreForm (props){

    const [genre, setGenre] = useState('Thriller');

    const handleSubmit = async () => {

        try {
            const response = await fetch(`${URI}/recommend/${genre}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
                },
            });

            if (!response.ok) {
                if (response.status === 404) {
                    console.log(`No movies found with genre ${genre}`)
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } else {

                const responseData = await response.json();
                //console.log(responseData);
                props.findMovies(responseData);
            }

        } catch (error) {
            console.error('Error obtaining movies:', error);
        }

    }

	return (
        <div className='movie-request'>
            <div className='movie-request-header'>
                What <span>genre</span> are you looking for today?
            </div>
            <div className='movie-request-input'>
                <input 
                    type='text' 
                    placeholder='horror, adventure, thriller, etc.'
                    onChange={(e) => setGenre(e.target.value.trim())}
                />
                <div className='request-submit-container' onClick={handleSubmit}>
                    <div className='request-submit'>Submit</div>
                </div>
            </div>
        </div>
	)
}

export default GenreForm;