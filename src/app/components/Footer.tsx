import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer pb-3 pt-4 " id="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Ngoding.</h3>
          </Col>
          <Col className="text-end mx-lg-3 mx-2">
            <i className="fa-brands fa-facebook text-white fs-1"></i>
            <i className="fa-brands fa-linkedin text-white fs-1 mx-lg-3 mx-2"></i>
            <i className="fa-brands fa-github text-white fs-1 mx-lg-3 mx-2"></i>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-white-50">
            <p>&copy; Copyright by Lorem 2024, All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
