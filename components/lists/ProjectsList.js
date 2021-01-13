import React, { useState } from "react";
import Link from "next/link";
import { ListGroup, Modal, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import ProjectService from "services/ProjectService";

function ProjectList(props) {
  const { data, mutateList } = props;

  const [show, setShow] = useState(false);
  const [projectId, setProjectId] = useState(null);

  const handleClose = () => {
    setProjectId(null);
    setShow(false);
  };

  const handleShow = (projectId) => () => {
    setProjectId(projectId);
    setShow(true);
  };

  return (
    <>
      <ListGroup>
        {data.map((item) => {
          return (
            <ListGroup.Item className="bg-transparent text-white" key={item.id}>
              <Link href={`/projects/${item.id}`}>
                <a className="text-white">{item.name}</a>
              </Link>
              <a className="float-right text-white" type="button" onClick={handleShow(item.id)}>
                <FaTrash />
              </a>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
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

export default ProjectList;
