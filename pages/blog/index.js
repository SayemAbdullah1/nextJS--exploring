import Link from 'next/link';
import React from 'react';

const Blog = ({blogId = 200}) => {
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
        </div>
    );
};

export default Blog;