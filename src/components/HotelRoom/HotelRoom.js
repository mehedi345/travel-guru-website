import React, { useContext, useEffect, useState } from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import fakeData from '../fakeData'
import Hotel from '../Hotel/Hotel';
const HotelRoom = () => {
    const [categories, setCategories] = useContext(CategoryContext);
    const [hotelRoom, setHotelRoom] = useState([]);
 

    useEffect(() => {
        const matchedHotelRoom = fakeData.filter( hotelRoom => hotelRoom.categories = categories.toLowerCase());
        setCategories(matchedHotelRoom);
    }, [categories]);
    return (
        <Container className="bg-light">
        <Row>
          <Col sm={6}>
            <h1>Stay in {categories}</h1>
            {products.map((rst) => (
              <Hotel item={rst} key={rst.key}></Hotel>
            ))}
          </Col>
        
        </Row>
      </Container>
    );
};

export default HotelRoom;