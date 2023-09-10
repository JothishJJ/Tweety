import { Link } from "react-router-dom";

export function LoginPage() {
    return (
        <>
            <h1>Login Page</h1>
            <button className="btn btn-primary">
                <Link to="/">Home</Link>
            </button>
        </>
    );
}
