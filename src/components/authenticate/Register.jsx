import React, { useState } from 'react';
import './Authenticate.css';
import { useNavigate } from 'react-router-dom';

const URI = "http://localhost:4000";

function Register(props) {
    

    const [name, setName] = useState();
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    const [status, setStatus] = useState({
        name: true,
        user: true,
        email: true,
        password: true,
    });
    
    const checkStatus = (value) => {
        
        if (typeof value === 'undefined') {
            return false;
        }

        if (value.length == 0) {
            return false;
        }

        return true;
    }

    const checkEmailPass = (value) => {

        if (value.includes(' ')) {
            return false;
        }

        return true;

    }

    const checkDuplicate = async (value) => {
        
        try {
            // check if user already exists with email
            const response = await fetch(`${URI}/register/${value}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            if (responseData.userExists) {
                console.log(responseData.userExists);
                return false;
            } 

            return true;

        } catch(error) {
            console.error('Error obtaining user:', error);
            return false;
        };

    }

    const checkUser = async (user) => {
        const dup = await checkDuplicate(user);
        return dup;
    }

    const checkEmail = async (email) => {

        if (!checkEmailPass(email)) {
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return false;
        }
        
        const dup = await checkDuplicate(email);
        return dup;


    }

    const handleSubmit = async (event) => {
        
        event.preventDefault()

        const newStatus = {
            name: checkStatus(name),
            user: checkStatus(user) && await checkUser(user),
            email: checkStatus(email) && await checkEmail(email),
            password: checkStatus(password) && checkEmailPass(password),
        }
        
        setStatus(newStatus);
        console.log(newStatus);

        if (Object.values(newStatus).includes(false)) {
            console.log(`user registration is not valid.`);
            console.log(newStatus);
        } else {
            
            fetch(`${URI}/register`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                  // Add any additional headers if needed
                },
                body: JSON.stringify({name, user, email, password}),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(responseData => {
                console.log(responseData);              
                props.switchPage('Login');
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });


        }
        
        // props.switchPage('Login');
    }

    const handleClick = () => {
        props.switchPage('Login');
    };
  
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Register</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <div className='input'>
                        {/* <img src='' alt=''/> */}
                        <input 
                            type='text' 
                            placeholder='Name' 
                            onChange={(e) => setName(e.target.value.trim())}
                            style={{backgroundColor: status.name ? '#0C0D0E' : '#FA8072'}}/>
                    </div>
                    <div className='input'>
                        {/* <img src='' alt=''/> */}
                        <input 
                            type='text' 
                            placeholder='Username'
                            onChange={(e) => setUser(e.target.value.trim())}
                            style={{backgroundColor: status.user ? '#0C0D0E' : '#FA8072'}}/>
                    </div>
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
                <button type='submit' className='submit-container'>
                    <div className='submit'>Register</div>
                </button>
            </form>
            <div className='already-container'>
                <div className='already'>Already signed up? <span onClick={handleClick}>Login here!</span></div>
            </div>
    
        </div>
    )
}

export default Register;