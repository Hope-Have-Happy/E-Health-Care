import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsOfService = () => {
    const { serviceId } = useParams();
    const [singleService, setSingleServices] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setSingleServices(data))
    }, []);

    const a = singleService.filter(sr => (sr.id === serviceId))
    const srData = a[0]
    console.log(srData)
    return (
        <div>
            <h1>This is Number {serviceId}</h1>
            {/* <div className="card mb-3">
                <img className="card-img-top" src={img} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div> */}
        </div>
    );
};

export default DetailsOfService;