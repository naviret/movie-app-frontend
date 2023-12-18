import react, { useEffect, useState } from 'react';
import Register from '../components/authenticate/Register.jsx';
import Login from '../components/authenticate/Login.jsx';


function Authenticate (){

    const [action, setAction] = useState('Login');

    const switchPage = (page) => {
        setAction(page);
        console.log(action);
    };    


	return (
		<div>
			{(action === 'Login') ? 
            (<Login switchPage={(page) => switchPage(page)}/>) : 
            (<Register switchPage={(page) => switchPage(page)}/>)}
		</div>
	)
}

export default Authenticate;