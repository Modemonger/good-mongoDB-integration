import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);  
    const [error, setError] = useState(false);

    const {setUser} = useContext(UserContext);
    const {userState} = useContext(UserContext);

    const successMessage = () => {
        return (
            <div
            className="success"
            style={{
                display: submitted ? '' : 'none',
            }}>
            <h1>User successfully loged in!!</h1>
            </div>
        );
    };
    
    const errorMessage = () => {
        return (
            <div
            className="error"
            style={{
                display: error ? '' : 'none',
            }}>
            <h1>Could not sign in.</h1>
            </div>
        );
    };

    const submit = e => {
        e.preventDefault();
        axios.post('/api/users/login', {email: email, password: password})
        .then(response => response.data)
        .then(data => {
            window.localStorage.setItem('access_token', data.token);
            setUser(data);
            setSubmitted(true);
            setError(false);
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            setError(true);
            setSubmitted(false);
        })
        
    }

    return (
        <div id='registerPage' className='registerPage'>
            <div className="container">
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <label>
                    <h1>User Sign in</h1>
                    <form onSubmit={submit}>
                        <label>
                            Enter email:
                            <input type="email" name="email" id="email" value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                        </label>
                        <label>
                            Enter password:
                            <input type="password" name="password" id="password" value={password} onChange = {(e)=> setPassword(e.target.value)}/>
                        </label>
                        <input type="submit" value="Sign in" />
                    </form>
                </label>
            </div>
        </div>
    )
}
