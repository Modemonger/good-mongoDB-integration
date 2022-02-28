import React from 'react';
import { UserProvider } from './context/UserContext';
import NavBar from './components/navbar/NavBar';
function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
      </UserProvider>
      
    </div>
  );
}

export default App;
