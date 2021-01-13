import React from "react";
// next
import Router from "next/router";
// react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// formik
import { useFormik } from "formik";
import AccountService from "services/AccountService";

function ResetPasswordForm(props) {
  const formik = useFormik({
    initialValues: {
      password: "",
      password:"",
    },
    onSubmit: (values) => {
      console.log(values);

      AccountService.ResetPassword(values)
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
            <br></br>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>New password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter new Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Confirm new password"
                value={formik.values.password}
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

export default ResetPasswordForm;
