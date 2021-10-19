import React, { useEffect, useState } from 'react';
import EachService from './EachService/EachService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="mt-5 mb-5 text-center">
                <h2>Our <span className="text-danger">Services</span></h2>
            </div>

            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {services.map(service =>
                        <div className="col">
                            <EachService
                                id={service.id}
                                service={service}
                            >
                            </EachService>
                        </div>)}
                </div>
            </div>

        </div>
    );
};

export default Services;