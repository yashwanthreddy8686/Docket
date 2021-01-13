import React from "react";
//Next
import Image from "next/image";
//form
import {SignUpForm} from "components/forms";

//React-Bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";

function RegisterPage() {
  return (
    <Container fluid>
      <Row>
        
        <Col sm={6} md={8} className="p-0">
          <div className="side-image-container">
            <img src="/images/undraw_project_team_lc5a (2).svg" />
          </div>
        </Col>
        <Col sm={6} md={4} className="d-flex">
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
