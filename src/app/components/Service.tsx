import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Service = () => {
  return (
    <div className="services min-vh-100 flex align-items-center" id="services">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Services</h1>
            <p className="text-center mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-col-sm-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3 ">
            <i className="fa-solid fa-coins fs-2 mb-3"></i>
            <h5 className="fw-bold">harga terjangkau</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Col>{" "}
          <Col className="text-center py-5 px-3">
            <i className="fa-solid fa-thumbs-up fs-2 mb-3"></i>
            <h5 className="fw-bold">Fasilitas Terbaik</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Col>{" "}
          <Col className="text-center py-5 px-3">
            <i className="fa-solid fa-shield-halved fs-2 mb-3"></i>
            <h5 className="fw-bold">Tersertivikasi</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
