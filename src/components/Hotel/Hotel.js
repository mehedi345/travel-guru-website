import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Hotel = (props) => {
    const { name, title, about, price, totalPrice, img } = props.item;
    return (
        <Container>
            <Row>
                <Col sm={12} className="item-row">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="title">
                        <h6>{name}</h6>
                        <p>{about}</p>
                        <p>{title}</p>
                        <p>{price}</p>
                        <span>
                            <small>${totalPrice}/total</small>{" "}
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Hotel;