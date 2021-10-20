import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import "./Navbar.css"

const Navbar = () => {

    const { user, logOut } = useAuth();
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container row d-flex justify-content-around m-auto">
                    <div className="col-md-2">
                        <a className="navbar-brand d-flex justify-content-center align-items-center" href="/"><img className="w-25" alt="" /><h4>E-Health <span className="text-danger">Care</span></h4></a>
                    </div>
                    <div className="col-md-2"></div>
                    <button className="navbar-toggler w-25 m-auto float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-md-8" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/home"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/services"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    Services
                                </NavLink></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/support"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    Support
                                </NavLink></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/about"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    About
                                </NavLink></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/contact"
                                    activeStyle={{

                                        color: "red"
                                    }}
                                >
                                    Contact
                                </NavLink></a>
                            </li>

                            {!user?.email ?
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><NavLink
                                        className="ms-4 text"
                                        to="/login"
                                        activeStyle={{

                                            color: "red"
                                        }}
                                    >
                                        Login
                                    </NavLink></a>

                                </li>

                                :
                                <li onClick={logOut} className="nav-item">
                                    <a className="nav-link" href="/"><NavLink
                                        className="ms-4 text"
                                        to="/login"
                                        activeStyle={{

                                            color: "red"
                                        }}
                                    >
                                        Logout
                                    </NavLink></a>

                                </li>
                                // <button className="btn  font-weight-bold" onClick={logOut}>Logout</button>
                            }

                            {user?.displayName &&
                                <li className="nav-item"> <p>User: {user.displayName}</p></li>}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;