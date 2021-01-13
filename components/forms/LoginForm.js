import React from "react";
// next
import Router from "next/router";
// react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// formik
import { useFormik } from "formik";
// service
import AccountService from "services/AccountService";
import { setAxiosHeader, getAxiosHeader } from "config/axios_configuration";

function LoginForm(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      AccountService.login(values)
        .then((response) => {
          setAxiosHeader(response.access);
          AccountService.setAccessToken(response.access);
          AccountService.setRefreshToken(response.refresh);
          AccountService.setUserInfo(response.user);
          // console.log(getAxiosHeader());
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
            <h1>LOGIN PAGE</h1>
            <h6>Login with your credentials that you have used during registration.</h6>
            <br></br>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
            <Form.Group>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
