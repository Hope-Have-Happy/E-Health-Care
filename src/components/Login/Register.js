import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Register = () => {
    const { error, getName, getEmail, userRegistration, getPassword } =
        useAuth();

    return (
        <div className="m-auto p-3 mt-3 mb-3 border rounded w-50">
            <h2>Please <span className="text-danger">Register</span></h2>
            <div className="text-danger" style={{ height: "10px" }}>
                {error}
            </div>
            <div class="row px-3">
                <input onChange={getName} class="mb-4" type="email" placeholder="Enter a your full name" />
            </div>
            <div class="row px-3">
                <input onChange={getEmail} class="mb-4" type="email" placeholder="Enter a valid email address" />
            </div>
            <div class="row px-3">
                <input onChange={getPassword} type="password" placeholder="Enter password" />
            </div>
            <div class="row px-3">
                <input onClick={userRegistration} type="submit" class="btn btn-blue text-center text-white mx-auto mt-2" value="Register" />
            </div>
            <p className="mt-3 ">
                Already registered? <Link to="/login" className="text-danger">Log in</Link> here{" "}
            </p>
        </div>
    );
};

export default Register;