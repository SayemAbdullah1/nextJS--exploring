import Link from "next/link";


const ErrorPage = () => {
    return (
        <div>
            <h1>Page not found. </h1>
            <Link href='/'>
                <h3>Go to home</h3>
            </Link>
        </div>
    );
};

export default ErrorPage;