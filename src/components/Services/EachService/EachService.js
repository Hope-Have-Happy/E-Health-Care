import React from 'react';
import { Link } from 'react-router-dom';
import './EachService.css';

const EachService = (props) => {

    const { id, img, name, fees, description } = props.service;
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name.slice(0, 25)}</h5>
                    <h5>Fees: <span className="text-danger">${fees}</span></h5>
                    <p>{description.slice(0, 200)}</p>
                </div>
                <Link to={`/services/${id}`}><button type="button" className="btn btn-danger w-100">See More</button></Link>
            </div>
        </div>
    );
};

export default EachService;