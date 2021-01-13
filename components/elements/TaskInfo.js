import React from "react";
// react bootstrap
import { Button, Form } from "react-bootstrap";

function TaskInfo(props) {
  const { data } = props;

  return (
    <div>
      <h4>{data.task.name}</h4>
      <p className="text-sm">In Board: {data.board.name}</p>
      <p>{data.task.description}</p>
      <Form>
        <Form.Control type="textarea" rows="3"></Form.Control>
      </Form>
    </div>
  );
}

export default TaskInfo;
