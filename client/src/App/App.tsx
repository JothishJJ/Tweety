import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <h1>Hello There!</h1>
            <button className="btn btn-primary">
                <Link to="/login">Login</Link>
            </button>
        </>
    );
}

export default App;
