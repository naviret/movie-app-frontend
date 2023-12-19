import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Authenticate.css';

const URI = "http://localhost:4000";

function Login(props) {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    const [status, setStatus] = useState({
        email: true,
        password: true,
    })
    
    const handleSubmit = async (event) => {
        
        event.preventDefault();

        try {
            const response = await fetch(`${URI}/login/${email}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
                },
            });

            if (!response.ok) {
                if (response.status === 404) {
                    setStatus(prev => ({
                        ...prev,
                        email: false,
                    }))
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } else {

                const responseData = await response.json();
                if (responseData.password !== password) {
                    setStatus(prev => ({
                        email: true,
                        password: false,
                    }))
                } else {
                    setStatus(prev => ({
                        email: true,
                        password: true,
                    }))
                    
                    const username = responseData.user;
                    console.log("User authentification: succseful.");
                    navigate(`/home/${username}`, responseData);

                }

            }
        } catch (error) {
            console.error('Error obtaining email:', error);
        }

        //const userid = responseData._id;


    }

    const handleClick = () => {
        props.switchPage('Register');
    };
    
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <div className='input'>
                        {/* <img src='' alt=''/> */}
                        <input 
                            type='email' 
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value.trim())}
                            style={{backgroundColor: status.email ? '#0C0D0E' : '#FA8072'}}/>
                    </div>
                    <div className='input'>
                        {/* <img src='' alt=''/> */}
                        <input 
                            type='password' 
                            placeholder='Password'
                            onChange={(e) => setPass(e.target.value.trim())}
                            style={{backgroundColor: status.password ? '#0C0D0E' : '#FA8072'}}/>
                    </div>
                </div>
                <div className='forgot-password'>Forgot password? <span>Click here!</span></div>           
                <button type='submit' className='submit-container'>
                    <div className='submit'>Login</div>
                </button>
            </form>
            <div className='already-container'>
                <div className='already'>Not registered? <span onClick={handleClick}>Register here!</span></div>
            </div>
    
        </div>
    )
}

export default Login;