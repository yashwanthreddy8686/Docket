import React from "react";
// next
import Router from "next/router";
// react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// formik
import { useFormik } from "formik";
import AccountService from "services/AccountService";

function SignUpForm(props) {
  const formik = useFormik({
    initialValues: {
        Fullname:"",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);

      AccountService.signup(values)
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
            <h1>SIGN UP PAGE</h1>
            <h6>Enter your details to get free access to docket.</h6>
            <br></br>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="fullname"
                placeholder="Enter your name"
                name="fullname"
                value={formik.values.Fullname}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="By creating an account you agrre to the terms of use and our privacy policy" />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;
