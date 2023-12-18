import React from 'react';
import './Authenticate.css';

function Register(props) {
    
    const handleClick = () => {
        props.switchPage('Login');
    };
  
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Register</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    {/* <img src='' alt=''/> */}
                    <input type='text' placeholder='First Name'/>
                </div>
                <div className='input'>
                    {/* <img src='' alt=''/> */}
                    <input type='text' placeholder='Last Name'/>
                </div>
                <div className='input'>
                    {/* <img src='' alt=''/> */}
                    <input type='email' placeholder='Email'/>
                </div>
                <div className='input'>
                    {/* <img src='' alt=''/> */}
                    <input type='password' placeholder='Password'/>
                </div>
            </div>      
            <div className='submit-container'>
                <div className='submit'>Register</div>
            </div>
            <div className='already-container'>
                <div className='already'>Already signed up? <span onClick={handleClick}>Login here!</span></div>
            </div>
    
        </div>
    )
}

export default Register;