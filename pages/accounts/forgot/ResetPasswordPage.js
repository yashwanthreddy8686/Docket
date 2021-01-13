import React from "react";
//React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";
// components
import { ResetPasswordForm } from "components/forms";

function ResetPasswordPage() {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} md={4} className="d-flex">
          <ResetPasswordForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPasswordPage;
