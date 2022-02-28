import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const ScheduleForm = () => {

    const navigate = useNavigate();

    let token = window.localStorage.getItem('access_token');

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        time_start: '',
        time_end: '',
        date: '',
    });

    const {title, description, time_start, time_end, date} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const dateStart = formData.date + 'T' + formData.time_start + 'Z';
        const dateEnd = formData.date + 'T' + formData.time_end + 'Z';
        axios.post('/api/schedule/', {title: formData.title, description: formData.description, time_start: dateStart, time_end: dateEnd}, {headers: {authorization: 'Bearer '+token}})
        .then(response => response.data)
        .then(data => {
            navigate('/')
        })
        .catch(err => console.log(err.data))
    }

    return (
        <label>
            Fill out a schedule event.
            <form onSubmit={onSubmit}>
                <label>
                    Title:
                    <input type="text" 
                        name="title" 
                        id="title" 
                        required={true}
                        value={title}
                        onChange={onChange}
                        />
                </label>
                <label>
                    Description:
                    <input type="text" 
                        name="description" 
                        id="title" 
                        value={description}
                        onChange={onChange}
                        />
                </label>
                <label>
                    Starts at:
                    <input type="time" name="time_start" id="startsAt"
                        required={true}
                        value={time_start}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Ends at:
                    <input type="time" name="time_end" id="endsAt" 
                        required={true}
                        value={time_end}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Day:
                    <input type="date" name="date" id="date" 
                        required={true}
                        value={date}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </label>
    )
}
