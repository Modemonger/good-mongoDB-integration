import React from 'react';
import { UserProvider } from './context/UserContext';
import NavBar from './components/navbar/NavBar';
import { Footer } from './components/footer/Footer';
import './style/style.css';
function App() {
  return (
    <div className="Scheduler">
      <UserProvider>
        <NavBar />
      </UserProvider>
      <Footer/>
    </div>
  );
}

export default App;
