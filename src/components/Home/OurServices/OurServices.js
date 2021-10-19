import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OurServices.css'

const OurServices = (props) => {
    const { id, name, img, description, fees } = props.service;
    return (
        <div>
            <Card.Img className="img-size height" variant="top" src={img} />
            <Card.Body>
                <Card.Title> <h5>{name}</h5></Card.Title>
                <h5>Fees: <span className="text-danger">${fees}</span></h5>
                <Card.Text>
                    {description.slice(0, 200)}
                </Card.Text>
                <Link to={`services/${id}`}>
                    <button className="btn btn-danger">See More</button>
                </Link>
            </Card.Body>
        </div>
    );
};

export default OurServices;