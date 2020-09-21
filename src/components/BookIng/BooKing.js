import React, { useContext } from 'react';
import {Container, Col, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CategoryContext } from '../../App';

const BooKing = () => {
  const history = useHistory();
  const [categories, setCategories] = useContext(CategoryContext);

  return (
    <Container>
      <Row className="booking" style={{display: 'flex'}}>
        <Col sm={6}>
          <div className="tite-context">
            <h1 style={{color: 'white'}}>{categories}</h1>
            <p style={{color: "white"}}>
              {categories} to {categories.title}popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney{categories} College
              in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going{" "}
              {categories.price}through the cites of the word in classical
              literature, {categories.title}discovered the undoubtable source.
              Lorem Ipsum comes from {categories.name}
              sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written{" "}
              {categories.about}in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </p>
          </div>
        </Col>
        <Col sm={5} className="offset-md-1">
          <div className="form-area">
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="email" placeholder="Your Location" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" defaultValue={categories} />
              </Form.Group>
              <input onClick={() => history.push("/search")} type="submit" value="Start Booking" name="" id="start-booking" />
            
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BooKing;