import React from "react";
// react bootstrap
import { Button, Form } from "react-bootstrap";
// services
import BoardService from "services/BoardService";
// formik
import { useFormik } from "formik";
// icons
import { FaTimes } from "react-icons/fa";

function BoardCardForm(props) {
  const { projectId, onClose } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      BoardService.create(projectId, values)
        .then((response) => {
          console.log(response);
          onClose();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-1">
          <Form.Control
            as="textarea"
            rows={3}
            name="name"
            placeholder="Enter Board Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Button size="sm" variant="success" type="submit">
            Create New Board
          </Button>
          <Button type="button" size="sm" variant="light" className="float-right" onClick={onClose}>
            <FaTimes />
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default BoardCardForm;
