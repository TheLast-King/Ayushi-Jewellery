import React, { useEffect, useState } from 'react';
import axios from 'axios';
import configURLS from '../config/config';

const Teachers = () => {
    const [users, setUsers] = useState([]);
    const options = ['Option 1', 'Select 2', 'Select 3', 'Select 4'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(configURLS.users);
                const data = response.data.users; 
                console.log(data);  
                setUsers(data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-col '>
      <div className='flex-row'>
  <label htmlFor="teachers" className="mr-4">Teachers:</label>
  <select id="teachers" className="w-24 m-4">
    {options.map((option, index) => (
      <option key={index}>{option}</option>
    ))}
  </select>
</div>


        <div className='flex-row m-2 p-2'>
            {users.map((user, index) => ( 
                <div key={index} className='flex justify-center items-center'>
                    {user.username} 
                </div>
            ))}
        </div>
        </div>
    );
};

export default Teachers;
