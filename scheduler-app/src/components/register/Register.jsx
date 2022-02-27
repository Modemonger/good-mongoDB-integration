import React, { useState } from 'react';
import axios from 'axios';

export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);  
    const [error, setError] = useState(false);

    const successMessage = () => {
        return (
            <div
            className="success"
            style={{
                display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
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
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            axios.post('/api/users/', {name: name, email: email, password: password})
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
                <h1>User Registration</h1>
                <form onSubmit={submit}>
                    <label>
                        Enter username:
                        <input type="text" name="name" id="name" value={name} onChange = {(e)=> setName(e.target.value)}/>
                    </label>
                    <label>
                        Enter email:
                        <input type="email" name="email" id="email" value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Enter password:
                        <input type="password" name="password" id="password" value={password} onChange = {(e)=> setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="Register" />
                </form>
            </label>
        </div>
    </div>
    )
}
