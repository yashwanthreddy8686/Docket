import React from "react";
// formik
import { useFormik } from "formik";
// react bootstrap
import { Button, Form } from "react-bootstrap";
// icons
import { FaTimes } from "react-icons/fa";
// service
import TaskService from "services/TaskService";

function TaskCardForm(props) {
  const { boardId, onClose } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      TaskService.create(boardId, values)
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
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Button size="sm" variant="success" type="submit">
            Add Task
          </Button>
          <Button type="button" size="sm" variant="light" className="float-right" onClick={onClose}>
            <FaTimes />
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default TaskCardForm;
