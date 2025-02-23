import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer pb-3 pt-4 " id="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">KJT</h3>
          </Col>
          <Col className="text-end mx-lg-3 mx-2">
            <a
              href="mailto:khaliljayateknik@gmail.com"
              title="khaliljayateknik@gmail.com"
            >
              <i className="fa-solid fa-envelope text-white fs-1"></i>
            </a>
            {/* <i className="fa-brands fa-facebook text-white fs-1" title="Facebook"></i>
            <i className="fa-brands fa-linkedin text-white fs-1 mx-lg-3 mx-2" title="LinkedIn"></i>
            <i className="fa-brands fa-github text-white fs-1 mx-lg-3 mx-2" title="GitHub"></i> */}
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-white-50">
            <p>&copy; Khalil Jaya Teknik | All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
