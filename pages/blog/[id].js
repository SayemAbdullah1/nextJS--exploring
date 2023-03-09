
const singlePost = ({data}) => {
    console.log(data);
    return (
        <div>
            <h2>Single Post</h2>
            <h2>{data.title}</h2>
            {data.body}
        </div>
    );
};

export async function getStaticProps(ctx) {
    const {params} = ctx

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()


    return {
        props: {
            data: data,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    const paths = data.map((post) => {
        return {
            params: { id: `${post.id}` }
        }
    })

    return {
        // paths: [{ params: { id: '1' } }],
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export default singlePost;