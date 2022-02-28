import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { ScheduleForm } from '../scheduleForm/ScheduleForm';

export const UserPage = () => {

    const {userState} = useContext(UserContext);

    const [schedule, setSchedule] = useState([]);

    let token = window.localStorage.getItem('access_token');

    useEffect(() => {
        setTimeout(() => {
            axios.get('/api/schedule/', {headers: {authorization: 'Bearer '+token}})
            .then(response => response.data)
            .then(data => {
                setSchedule(data);
            })
            .catch(err => console.log(err))
        }, 2000)
    }, [schedule])

    function removeItem(e,id){
        e.preventDefault();
        axios.delete(`/api/schedule/:id${id}`, {headers: {authorization: 'Bearer '+token}})
        .catch(err => console.log(err))
    }

    if(schedule)
    return (
        <div>
            <h3>{userState.name}</h3>
            {
                schedule.map( item => {
                    return (
                        <div key={item._id}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.time_start}</p>
                            <p>{item.time_end}</p>
                            <button onClick={(event) => removeItem(event, item._id)}>Remove</button>
                        </div>
                    )
                })
            }
            <ScheduleForm />
        </div>
    )
    else 
    return (
        <div>
            <h3>{userState.name}</h3>
            <ScheduleForm />
        </div>
    )
}
