import React from 'react';

const PostList = ({data}) => {
    console.log("post data, ", data);
    return (
        <div>
            <h2>Bolg page</h2>
           {
            data.map((post)=> {
                return(
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
            })
           }
        </div>
    );
};

export async function getServerSideProps(ctx) {
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    
    return { 
        props: { 
            data: data.slice(0, 10)
        },
     }
}

export default PostList;