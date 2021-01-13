import React from "react";
//Next
import Image from "next/image";
//React-Bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";
// components
import { LoginForm } from "components/forms";

function LoginPage() {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} md={4} className="d-flex">
          <LoginForm />
        </Col>
        <Col sm={6} md={8} className="p-0">
          <div className="side-image-container">
            <img src="/images/scrum_board.svg" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
