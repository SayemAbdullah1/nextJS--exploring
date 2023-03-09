import React, { useState } from 'react';

const users = () => {
const [users, setUsers] = useState([])
const [user, setUser] = useState('')

    const handleUsers = ()=>{
        fetch('api/users')
        .then(res=> res.json())
        .then(data => setUsers(data))
    }
    const handleAdduser= ()=>{
        fetch('api/users', {
            method: "POST",
            body: JSON.stringify({user}),
            headers: {"content-type": "application/json"},
        })
        handleUsers()

    }

    const handleDelete=(id)=>{
        fetch(`api/users/${id}`,{
            method: 'DELETE',
        } 
        )
        handleUsers()
    }
    return (
        <div>
            <div>
                <input type="text" onChange={(e)=> setUser(e.target.value)} />
                <button onClick={handleAdduser}>Add new user</button>
            </div>
            <h2>All users</h2> <hr />
            {
                users.map(SingleUser => {
                    return(
                        <div>
                            <h2>{SingleUser.name}</h2>
                            <button onClick={()=> handleDelete(user.id)}>Delete</button>
                        </div>
                )
                })
            }
            <button onClick={handleUsers}>Load all users</button>
        </div>
    );
};

export default users;