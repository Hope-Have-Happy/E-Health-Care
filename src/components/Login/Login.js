import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Login = () => {
    const {
        signInWithEmail,
        googleSignIn,
        userEmail,
        userPassword,
        error,
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";
    const googleLogin = () => {
        googleSignIn();
        history.push(redirect_url)
    }
    return (
        <div className="w-25 m-auto p-3 mt-5 mb-5 border rounded">
            <h2 className="text-primary ">Please, Log in</h2>
            <div className="text-danger" style={{ height: "50px" }}>
                {error}
            </div>
            <form>
                <input
                    onChange={userEmail}
                    className="form-control mb-3"
                    type="email"
                    name=""
                    id=""
                    placeholder="E-mail"
                />
                <input
                    onChange={userPassword}
                    className="form-control mb-3"
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                />
                <input
                    onClick={signInWithEmail}
                    className="btn btn-primary mb-3 w-100"
                    type="submit"
                    value="Login"
                />
            </form>
            <p>Or</p>
            <p className="text-">Sign in with</p>
            <button onClick={googleLogin} className="btn btn-success me-2 w-100">
                Google
            </button>
            <p className="mt-3">
                New user? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default Login;