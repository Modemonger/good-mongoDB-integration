import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Register } from './components/register/Register';
import { Login } from './components/login/Login';
import NavBar from './components/navbar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
