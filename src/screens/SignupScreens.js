import React from 'react'
import './SignupScreen.css';

function SignupScreens() {
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder='Email'
                type='email'/>
                <input placeholder='Password'
                type='password'/>
                <button type='submit'>Sign In</button>
                <h4>
                   <span className='signupScreen_gray'>
                        New to Netflix?</span> 
                <span> Sign Up now.</span>  </h4>
            </form>
        </div>
    )
}

export default SignupScreens
