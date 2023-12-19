import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Welcome from '../components/main/Welcome.jsx'

function UserHomePage (){

	const { user } = useParams();
	
	const location = useLocation();
	const { state } = location;


	return (
		<div>
            <Welcome name={user}/>
		</div>
	)
}

export default UserHomePage;