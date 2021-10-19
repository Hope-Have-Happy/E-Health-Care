import React from 'react';

const Support = () => {
    return (
        <div>
            <div className="text-center mt-5 mb-5">
                <h1>Support <span className="text-danger">For You</span></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mb-5 mx-auto">

                <div className="col">
                    <div className="card pb-5">
                        <img src="https://demo-images.netlify.app/teach/1.png" className="card-img-top w-25 mx-auto mt-4" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title text-center">24/7 <span className="text-danger ">Support</span></h2>
                            <p className="card-text">24/7 Online Support - We always listen to our clients. Our team is always there to help them whenever they have a problem.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                        <img src="https://demo-images.netlify.app/teach/4.png" className="card-img-top w-25 mx-auto mt-4" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title text-center">Recorded <span className="text-danger ">Video</span></h2>
                            <p className="card-text">
                                Get practical lectures recorded as videos. This will create a better storage of materials for the future. And you can practice at home with these materials.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="https://demo-images.netlify.app/teach/6.png" className="card-img-top w-25 mx-auto mt-4" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title text-center">Live <span className="text-danger ">Session</span></h2>
                            <p className="card-text">Live sessions are synchronous events organized virtual meeting room where clients and doctors meet together to communicate with voice, video.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;