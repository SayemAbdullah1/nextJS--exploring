import React from 'react';

const singleUser = ({users}) => {
    return (
        <div>
            <h2>Single User</h2>
            <hr />
            <h1>Name: {users.name}</h1>
        </div>
    );
};
export async function getServerSideProps(ctx) {
    const {params} = ctx

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()


    return {
        props: {
            users: data
        },
    }
}


export default singleUser;