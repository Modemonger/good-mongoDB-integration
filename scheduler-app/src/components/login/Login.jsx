import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);  
    const [error, setError] = useState(false);

    let token = window.localStorage.getItem('access_token');

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
            <h1>Please enter all the fields</h1>
            </div>
        );
    };

    const submit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            axios.post('/api/users/login', {email: email, password: password}, {headers: {authorization: 'Bearer '+token}})
            .then(response => response.data)
            .then(data => {
                window.localStorage.setItem('access_token', data.token);
                console.log(data);
            })
            .catch(err => console.log(err))
        }
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
