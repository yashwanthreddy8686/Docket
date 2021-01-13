import React, { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
// hooks
import { useRequest, useUser } from "lib/hooks";
// components
import { ProjectForm } from "components/forms";
import { LoadingScreen } from "components/views";
import ProjectCard from "components/cards/ProjectCard";

function DashboardPage() {
  const user = useUser();
  // states
  const [show, setShow] = useState(false);
  // data fetching
  const { data, mutate } = useRequest({ url: "/api/projects/" });

  if (!data) {
    return <LoadingScreen />;
  }
  console.log(data);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="section">
        <Container>
          <h3>
            List of All Projects
            <Button className="float-right" onClick={handleShow}>
              Create New Project
            </Button>
          </h3>
          <Row>
            {data.map((item) => (
              <Col sm={4} md={3} key={item.id}>
                <ProjectCard
                  data={item}
                  mutate={() => {
                    mutate();
                  }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h4 className="text-center mt-3">Create New Project</h4>
          <ProjectForm
            onProjectSubmit={() => {
              mutate();
              handleClose();
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DashboardPage;
