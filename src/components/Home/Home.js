import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../App';
import CoxBazar from '../../Image/Sajek.png';
import SreeMongol from '../../Image/Sreemongol.png';
import Sundarban from '../../Image/sundorbon.png'
import './Home.css'
const Home = () => {
    const [categories, setCategories] = useContext(CategoryContext);
    return (
      <div className='home'>
          <Container className="item mt-5">
            <Row>
        <Col sm={4} className="item-text">
          <h1>{categories}</h1>
          <p>
            {categories} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium minus soluta doloribus id est repellat sapiente cum modi
            reprehenderit.
          </p>
          <Link to="/booking">
            <Button variant="warning">
              Booking 
            </Button>
          </Link>
         </Col>
         <Col md={8} className="item-area">
          <div className="img1" onClick={() => setCategories("cox'sbazar")}>
            <img src={CoxBazar} alt="" className="image" />
            <h2 className="overlay">Cox'sBazar</h2>
          </div>
          <div className="img2" onClick={() => setCategories("sreemongol")}>
            <img src={SreeMongol} alt="" className="image" />
            <h2 className="overlay">SreeMongol</h2>
          </div>
          <div className="img3" onClick={() => setCategories("sundarban")}>
            <img src={Sundarban} alt="" className="image" />
            <h2 className="overlay">SundarBan</h2>
          </div>
        
        </Col>
      </Row>
        </Container>
      </div>
        
    );
};

export default Home;