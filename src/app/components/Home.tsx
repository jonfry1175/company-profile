import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col className="text-center text-white fs-1">
            <h1>Mari Bersantai Sejenak</h1>
            <p className="text-white-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              facere.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
