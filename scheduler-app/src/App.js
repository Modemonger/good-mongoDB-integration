import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [db_response, setDb_response] = useState('')

  const user = {
    //name: 'React',
    email: 'react@gmail.com',
    password: 'reactpassword',
  }
  let token = window.localStorage.getItem('access_token');
  useEffect(() => {
    axios.post('/api/users/login', user , {headers: {authorization: 'Bearer '+token}})
    .then(response => response.data)
    .then(data => {
      setDb_response(data);
      window.localStorage.setItem('access_token', data.token);
      console.log(data);
      token = window.localStorage.getItem('access_token');
      return db_response;
    })
    .catch(err => console.log(err))
  }, []);
  

  
  
  return (
    <div className="App">
      <p>{db_response.name}</p>
      <p>{db_response.email}</p>
    </div>
  );
}

export default App;
