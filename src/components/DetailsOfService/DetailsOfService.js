import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsOfService = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("/data.JSON")
            .then((res) => res.json())
            .then((d) => setService(d));
    }, [serviceId]);

    useEffect(() => {
        const singleService = service.find((s) => s?.id === serviceId);
        setData(singleService);
    }, [service]);

    console.log(data);

    return (
        <div>
            <div className="container w-50">
                <div className="card mb-3">
                    <img className="card-img-top" src={data?.img} />
                    <div className="card-body">
                        <h5 className="card-title">{data?.name}</h5>
                        <h5>Fees: <span className="text-danger">${data?.fees}</span></h5>
                        <p className="card-text">{data?.description}</p>
                        <button className="btn- btn-danger">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsOfService;