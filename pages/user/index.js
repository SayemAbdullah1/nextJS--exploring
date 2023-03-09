import Link from "next/link";
import { useEffect, useState } from "react";


const users = () => {
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h3>All users</h3>
            <hr />
            {
                user.map(user => {
                    return (
                        <div>
                        <Link href={`/user/${user.id}`} passHref>
                                <h1>{user.name}</h1>
                        </Link>
                        <hr />
                        </div>
                )
                })
            }
        </div>
    );
};

// export async function getServerSideProps(ctx) {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data = await res.json()


//     return {
//         props: {
//             users: data
//         },
//     }
// }

export default users;