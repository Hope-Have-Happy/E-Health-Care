import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Register = () => {
    const { error, getName, getEmail, userRegistration, getPassword } =
        useAuth();

    return (
            <div className="m-auto p-3 mt-3 mb-3 border rounded w-50">
                <h2 className="text-primary">Please, Register</h2>
                <div className="text-danger" style={{ height: "50px" }}>
                    {error}
                </div>
                <form>
                    <input
                        onChange={getName}
                        className="form-control mb-3"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        onChange={getEmail}
                        className="form-control mb-3"
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        onChange={getPassword}
                        className="form-control mb-3"
                        type="password"
                        placeholder="Password"
                    />
                    <input

                        onClick={userRegistration}
                        className="btn bg-primary text-light w-100"
                        to="/login"
                        value="Registration"
                    />
                </form>
                <p className="mt-3">
                    Already registered? <Link to="/login">Log in</Link> here{" "}
                </p>
            </div>
    );
};

export default Register;