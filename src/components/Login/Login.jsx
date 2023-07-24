import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const { signIn } = useContext(AuthContext)
    console.log(signIn)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='form-container'>
            <h2 className='font-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className='from-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>
                <div className='from-control'>
                    <label htmlFor="">Password</label>
                    <input type={show ? "text" : "password"} name="password" placeholder='password' required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                    </small></p>
                </div>

                <input className='btn-submit ' type="submit" value="Login" />


            </form>
            <p><small>New to ema-jhone?<Link to="/signup">Create new account</Link> </small></p>

        </div>
    );
};

export default Login;