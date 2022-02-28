import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HeroPage } from '../heroPage/HeroPage';
import { Login } from '../login/Login';
import { Register } from '../register/Register';


const NavBar = () => {
  return (
        <div className='navBar'>
            <Router>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Signup</Link>
                    <Link to='/login'>Login</Link>
                </div>
                
                <Routes>
                    <Route path='/' element={<HeroPage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
            
        </div>
    );
};

export default NavBar;