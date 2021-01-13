import React from "react";
// next
import Router from "next/router";
// react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// formik
import { useFormik } from "formik";
import AccountService from "services/AccountService";

function ForgotPasswordForm(props) {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: (values) => {
      console.log(values);

      AccountService.ForgotPassword(values)
        .then((response) => {
          console.log(response);
          AccountService.setAccessToken(response.access);
          AccountService.setRefreshToken(response.refresh);
          AccountService.setUserInfo(response.user);
          Router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <Container className="align-self-center">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Form onSubmit={formik.handleSubmit}>
            <h1>Reset your password</h1>
            <h6>A link to reset your password will be sent to the email address associated with your sign-in ID</h6>
            <br></br>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Sign-in ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPasswordForm;
