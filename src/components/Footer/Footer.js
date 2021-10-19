import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                {/* Grid container  */}
                <div className="container p-4">
                    {/* Section: Social media  */}
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebook} /></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faTwitter} />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGoogle} />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedin} /></a>


                    </section>


                    {/* Section: Form  */}
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our new Services</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" placeholder="Enter your mail" />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>


                    <section className="mb-4">
                        <p>
                            In my opinion, our health care system has failed when a doctor fails to treat an illness that is treatable.”
                            <br />
                            ― Kevin Alan Lee
                        </p>
                    </section>

                </div>


                {/* Copyright  */}
                <div className="text-center p-3">
                    © 2021 Copyright

                </div>
            </footer>
        </div>
    );
};

export default Footer;