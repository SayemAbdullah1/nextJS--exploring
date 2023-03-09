import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const singleUser = () => {
    const [user, setUser] = useState(null)
    const {id} = useRouter().query
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div>
            <h2>Single User</h2>
            <hr />
            <h1>Name: {user?.name}</h1>
        </div>
    );
};
// export async function getServerSideProps(ctx) {
//     const {params} = ctx

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data = await res.json()


//     return {
//         props: {
//             users: data
//         },
//     }
// }


export default singleUser;