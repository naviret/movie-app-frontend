import react, { useEffect, useState } from 'react';
import './Welcome.css';


function Welcome (){

    const name = "ivancito";

	return (
		<div className='welcome-container'>
            <div className='welcome-header'>
                <div className='welcome-text'>
                    Welcome back {name}!
                </div>
            </div>
		</div>
	)
}

export default Welcome;