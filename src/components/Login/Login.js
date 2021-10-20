import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hook/useAuth";
import "./Login.css"

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
        <div class="col-lg-6 m-auto border rounded mt-5 mb-5">
            <div class="card2 card border-0 px-4 py-3">
                <div class="row mb-4 px-3">
                    <h2 class="mr-4 mt-2">Please <span className="text-danger">login</span></h2>
                </div>
                <div className="text-danger" style={{ height: "10px" }}>
                    {error}
                </div>
                <div class="row px-3">                
                    <input onChange={userEmail} class="mb-4" type="email" placeholder="Enter a valid email address" />
                </div>
                <div class="row px-3">                
                    <input onChange={userPassword} type="password" placeholder="Enter password" />
                </div>
                <div class="row mb-3 px-3 mx-auto mt-2"> <input onClick={signInWithEmail} type="submit" class="btn btn-blue text-center text-white" value="Login" />
                </div>
                <div class="row px-3 mb-2">
                    <div class="line"></div> <p class="or text-center">Sign in with</p>
                </div>
                <div class="row mb-3 px-3 mx-auto">
                    <button onClick={googleLogin} className="btn btn-success me-2 w-100">
                        Google
                    </button>
                </div>
                <div class="row mb-4 px-3"> <p class="font-weight-bold">Don't have an account? <Link to="/register" class="text-danger">Register</Link></p> </div>
            </div>
        </div>

    );
};

export default Login;