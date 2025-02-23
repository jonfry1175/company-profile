"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row>
          <Col className="mb-5">
            <h2 className="text-center fw-bold">Pertanyaan Umum (FAQ)</h2>
            <p className="text-center">
              Temukan jawaban atas pertanyaan seputar solusi IoT, integrasi
              teknologi, dan layanan kami.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Apa itu integrasi IoT?</Accordion.Header>
                <Accordion.Body>
                  Integrasi IoT adalah proses menghubungkan perangkat pintar
                  dengan sistem digital untuk memantau, mengontrol, dan
                  mengotomatisasi proses secara real-time.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>{" "}
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Bagaimana solusi IoT membantu bisnis saya?
                </Accordion.Header>
                <Accordion.Body>
                  Dengan IoT, bisnis Anda dapat meningkatkan efisiensi
                  operasional, mengurangi downtime, serta mendapatkan data
                  real-time untuk pengambilan keputusan yang lebih baik.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>{" "}
          <Col>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Apa saja layanan yang ditawarkan?
                </Accordion.Header>
                <Accordion.Body>
                  Kami menyediakan layanan seperti dashboard monitoring
                  real-time, otomatisasi sistem, predictive maintenance, dan
                  integrasi IoT khusus sesuai kebutuhan bisnis Anda.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>{" "}
          <Col>
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Apakah layanan ini bisa disesuaikan dengan kebutuhan bisnis
                  saya?
                </Accordion.Header>
                <Accordion.Body>
                  Tentu! Kami menyediakan solusi yang fleksibel dan dapat
                  disesuaikan dengan kebutuhan spesifik industri dan bisnis
                  Anda.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>{" "}
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Mengapa memilih solusi kami?
                </Accordion.Header>
                <Accordion.Body>
                  Memilih Khalil Jaya Teknik berarti memilih inovasi dan
                  keandalan. Kami memastikan solusi integrasi IoT disesuaikan
                  dengan kebutuhan bisnis Anda, memberikan performa tinggi dan
                  dukungan profesional setiap saat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Bagaimana cara memulai menggunakan layanan ini?
                </Accordion.Header>
                <Accordion.Body>
                  Anda dapat menghubungi kami untuk konsultasi gratis. Tim kami
                  siap membantu Anda dalam merancang dan mengimplementasikan
                  solusi yang tepat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
