import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css'
import OurServices from './OurServices/OurServices';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            {/* slider */}
            <div className="section">
                <div className="overlay ">


                    <div className="position"><h4 className="text-white">Let us be the ones who say we do not accept that a child dies every three seconds simply because he does not have the drugs you and I have. Let us be the ones to say we are not satisfied that your place of birth determines your right for life. Let us be outraged, let us be loud, let us be bold.</h4>

                        <h6 className="text-white">- By Brad Pitt</h6>

                    </div>
                </div>
            </div>


            {/* service section */}
            <div className="mt-5">
                <div>
                    <h1 className="mb-5 text-center">Our <span className="text-danger">Services</span></h1>
                </div>
                <div className="container mb-5">
                    <Row xs={1} md={3} className="g-4">

                        {services.map(service => <Col>
                            <Card style={{ height: "300 px" }}>
                                <OurServices key={service.id} service={service} ></OurServices>
                            </Card>
                        </Col>).slice(0, 6)
                        }
                    </Row>
                </div>

            </div>

        </div>



    );
};

export default Home;