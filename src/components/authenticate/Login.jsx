import react from 'react';
import './Authenticate.css';

function Login(props) {
    const handleClick = () => {
        props.switchPage('Register');
    };
    
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    {/* <img src='' alt=''/> */}
                    <input type='email' placeholder='Email'/>
                </div>
                <div className='input'>
                    {/* <img src='' alt=''/> */}
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            <div className='forgot-password'>Forgot password? <span>Click here!</span></div>           
            <div className='submit-container'>
                <div className='submit'>Submit</div>
            </div>
            <div className='already-container'>
                <div className='already'>Not registered? <span onClick={handleClick}>Register here!</span></div>
            </div>
    
        </div>
    )
}

export default Login;