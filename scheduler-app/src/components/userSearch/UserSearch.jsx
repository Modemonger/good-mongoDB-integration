import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UserSearch = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.get('/api/data/users')
            .then(response => response.data)
            .then(data => {
                setUsers(data);
                console.log(data);
            })
            .catch(err => console.log(err))
        }, 10000)
    }, [users])
if(users.length > 0)
  return (
    <div className='userSearch'>
        {
            users.map( item => {
                return (
                    <div className='item' key={item._id}>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
else
  return (
    <div className='userSearch'>
        <p>No users found yet :(</p>
    </div>
  )
}
