import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const onChangeUsername = useCallback((e) => {
        setUsername(e.target.value);
    }, []);

    const onChangeDescription = useCallback((e) => {
        setDescription(e.target.value);
    }, []);
    
    const onChangeDuration = useCallback((e) => {
        setDuration(e.target.value);
    }, []);
    
    const onChangeDate = useCallback((date) => {
        setDate(date);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));
        
        window.location = '/';
    }, [username, description, duration, date]);

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username));
                    setUsername(response.data[0].username);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <select
                  required
                  className="form-control"
                  value={username}
                  onChange={onChangeUsername}>
                  {
                    users.map(function(user) {
                      return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={description}
                  onChange={onChangeDescription}
                  />
            </div>
            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={duration}
                  onChange={onChangeDuration}
                  />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={date}
                  onChange={onChangeDate}
                />
              </div>
            </div>
    
            <div className="form-group">
              <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
      );


}

export default CreateExercise;