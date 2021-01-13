import React from "react";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function HomePage() {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col sm={5} className="d-flex">
            <div className="align-self-center">
              <h2>Work management for your enterprise</h2>
              <p>
                Docket helps people do their best work. Connect your company's work to strategy,
                using a platform your people will love to use, giving you the insights and data to
                make better decisions.
              </p>
              <Button type="submit">Get Started</Button>
            </div>
          </Col>
          <Col sm={7} className="p-0">
            <div className="side-image-container">
              <Image layout="fill" src="/images/1.svg" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pt-4 pb-4">
        <h3 className="text-center text-bold">All teams can work together, finally</h3>
        <p className="text-center">
          Docket's 'Spaces' are completely customizable, so every team can work together while using
          their own space.
        </p>
        <Row className="justify-content-center">
          <Col sm={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="/images/undraw_teamwork_hpdk.svg" />
              <Card.Body>
                <Card.Title>You will know what everyone is working on.</Card.Title>
                <Card.Text>
                  View other people's profile to see what they are working on and what they will
                  work on further for ultimate and unprecedented transparency.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="/images/accept_tasks.svg" />
              <Card.Body>
                <Card.Title>You will get a birds-eye view of literally everything</Card.Title>
                <Card.Text>
                  View every single task across entire team in any way you want. Sort, filter and
                  anage all task in a birds-eye view.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="/images/undraw_teamwork_hpdk.svg" />
              <Card.Body>
                <Card.Title>You will know what everyone is working on.</Card.Title>
                <Card.Text>
                  View other people's profile to see what they are working on and what they will
                  work on further for ultimate and unprecedented transparency.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="pt-4 pb-4">
        <Row>
          <Col sm={6}>
            <Image width="600px" height="auto" src="/images/team_work_3.svg" />
          </Col>
          <Col sm={6} md={4} className="d-flex">
            <Container className="align-self-center">
              <Row>
                <h3>Work management for your enterprise</h3>
                <p>
                  Docket helps people do their best work. Connect your company's work to strategy,
                  using a platform your people will love to use, giving you the insights and data to
                  make better decisions.
                </p>
                <Button type="submit">Get Started</Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomePage;
