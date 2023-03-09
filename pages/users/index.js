import React, { useState } from 'react';

const users = () => {
const [user, setUser] = useState([])
    const handleUsers = ()=>{
        fetch('api/users')
        .then(res=> res.json())
        .then(data => setUser(data))
    }
    return (
        <div>
            <h2>All users</h2> <hr />
            {
                user.map(SingleUser => {
                    return(
                        <div>
                            <h2>{SingleUser.name}</h2>
                        </div>
                )
                })
            }
            <button onClick={handleUsers}>Load all users</button>
        </div>
    );
};

export default users;