import React from "react";
// import dynamic from "next/dynamic";
// react bootstrap
import { Form, Button } from "react-bootstrap";
// import { GithubPicker } from "react-color";
// formik
import { useFormik } from "formik";
// services
import ProjectService from "services/ProjectService";
// const Picker = dynamic(() => import("emoji-picker-react"));

function ProjectForm(props) {
  const { onProjectSubmit } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      ProjectService.create(values)
        .then((response) => {
          console.log(response);
          onProjectSubmit();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="hooli"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>Project Color</Form.Label>
          <GithubPicker />
        </Form.Group> */}
        {/* <Form.Group>
          <Form.Label>Project Icon</Form.Label>
          <Picker onEmojiClick={onEmojiClick} />
        </Form.Group> */}
        <Form.Group className="text-center">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ProjectForm;
