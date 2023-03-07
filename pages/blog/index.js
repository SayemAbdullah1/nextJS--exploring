import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Blog = ({blogId = 200}) => {
    const router = useRouter()
    const handleSubmit = () =>{
        router.replace("/about")
    }
    return (
        <div>
            <Link href="blog/1">
                <h1>blog 1</h1>
            </Link>
            <Link href="blog/2">
                <h1>blog 2</h1>
            </Link>
            <Link href={`/blog/${blogId}`} replace>
                <h1>blog 200</h1>
            </Link>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Blog;