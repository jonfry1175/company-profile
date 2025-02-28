import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import Gallery1 from "../assets/img/gallery/gallery-1.jpg";
import Gallery2 from "../assets/img/gallery/gallery-2.jpg";
import Gallery3 from "../assets/img/gallery/gallery-3.jpg";
import Gallery4 from "../assets/img/gallery/gallery-4.jpg";
import Gallery5 from "../assets/img/gallery/gallery-5.jpg";
import Gallery6 from "../assets/img/gallery/gallery-6.jpg";

const Gallery = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
      <Container>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          <Col>
            <Image
              src={Gallery1}
              alt="unsplash.com"
              className="w-100"
              layout="responsive"
            />
          </Col>
          <Col>
            <Image
              src={Gallery2}
              alt="unsplash.com"
              className="w-100"
              layout="responsive"
            />
          </Col>
          <Col>
            <Image
              src={Gallery3}
              alt="unsplash.com"
              className="w-100"
              layout="responsive"
            />
          </Col>
          <Col>
            <Image
              src={Gallery4}
              alt="unsplash.com"
              className="w-100"
              layout="responsive"
            />
          </Col>
          <Col>
            <Image
              src={Gallery5}
              alt="unsplash.com"
              className="w-100"
              layout="responsive"
            />
          </Col>
          <Col>
            <Image
              src={Gallery6}
              alt="unsplash.com"
              className="w-100"
              layout="responsive"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
