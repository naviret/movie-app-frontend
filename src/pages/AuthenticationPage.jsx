import React, { useState } from 'react';
import Register from '../components/authenticate/Register.jsx';
import Login from '../components/authenticate/Login.jsx';


function AuthenticationPage (){

    const [action, setAction] = useState('Register');

    const switchPage = (page) => {
        setAction(page);
    };    


	return (
		<div>
			{(action === 'Login') ? 
            (<Login switchPage={(page) => switchPage(page)}/>) : 
            (<Register switchPage={(page) => switchPage(page)}/>)}
		</div>
	)
}

export default AuthenticationPage;