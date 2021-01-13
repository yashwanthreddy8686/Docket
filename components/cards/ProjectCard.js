import Link from "next/link";
import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import ProjectService from "services/ProjectService";

function ProjectCard(props) {
  const { data, mutate } = props;
  // states
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleDelete = () => {
    ProjectService.delete(data.id)
      .then((response) => {
        console.log(response);
        handleClose();
        mutate();
      })
      .catch((error) => {
        console.log(error);
        handleClose();
      });
  };

  return (
    <>
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Link href={`/projects/${data.id}`}>
            <Button as="a" variant="primary">
              Visit
            </Button>
          </Link>
          <Button className="float-right" as="a" variant="danger" onClick={handleShow}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h5 className="text-center">Are Sure You Want To Delete</h5>
          <div className="text-center">
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="light" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
