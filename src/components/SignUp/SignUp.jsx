import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState()
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)

        if (password !== confirm) {
            setError('Your Password is not match')
            return;
        }
        else if (password < 6) {
            setError('password must be 6 character or above ')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div className='form-container'>
            <h2 className='font-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='from-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>
                <div className='from-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>
                <div className='from-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='confirm password' required />
                </div>
                <p className='text-error'>{error}</p>

                <input className='btn-submit ' type="submit" value="Sign Up" />


            </form>
            <p><small>Already have an account?<Link to="/login">Login</Link> </small></p>
        </div>
    );
};

export default SignUp;