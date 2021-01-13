import React from "react";
//React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";
// components
import { ForgotPasswordForm } from "components/forms";

function ForgotPasswordPage() {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} md={4} className="d-flex">
          <ForgotPasswordForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPasswordPage;
