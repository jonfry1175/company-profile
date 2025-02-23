import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col className="text-center text-white fs-1">
            <h1>Solusi IoT dan Teknologi Terintegrasi untuk Bisnis Anda</h1>
            <p style={{ color: "rgba(255, 247, 250, 0.88) " }}>
              Optimalkan operasional dengan integrasi IoT cerdas, monitoring
              real-time, dan otomatisasi proses. Wujudkan efisiensi dan inovasi
              teknologi bersama kami.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
