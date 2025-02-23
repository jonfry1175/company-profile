import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Service = () => {
  return (
    <div className="services flex align-items-center" id="services">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Services</h1>
            <p className="text-center mb-5">
              Kami menyediakan solusi teknologi terbaik untuk integrasi IoT dan
              otomatisasi, memastikan bisnis Anda lebih efisien dan inovatif.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-col-sm-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3 ">
            <i className="fa-solid fa-coins fs-2 mb-3"></i>
            <h5 className="fw-bold">Biaya Terjangkau</h5>
            <p>
              Dapatkan layanan IoT dan implementasi teknologi dengan harga yang
              kompetitif tanpa mengorbankan kualitas.
            </p>
          </Col>{" "}
          <Col className="text-center py-5 px-3">
            <i className="fa-solid fa-thumbs-up fs-2 mb-3"></i>
            <h5 className="fw-bold">Teknologi & Layanan Terbaik</h5>
            <p>
              Kami menggunakan teknologi terbaru dan memberikan dukungan penuh
              untuk memastikan sistem Anda berjalan optimal.
            </p>
          </Col>{" "}
          <Col className="text-center py-5 px-3">
            <i className="fa-solid fa-shield-halved fs-2 mb-3"></i>
            <h5 className="fw-bold">Garansi hingga 12 Bulan</h5>
            Kami memberikan garansi layanan hingga 12 bulan untuk memastikan
            keandalan dan kepuasan Anda.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
