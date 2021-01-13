import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Button, Modal } from "react-bootstrap";
// components
import { TaskInfo } from "components/elements";

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  marginBottom: "8px",
  padding: "12px",
  borderRadius: "4px",
  background: isDragging ? "lightgreen" : "white",
  boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.35)",
  ...draggableStyle,
});

function Task(props) {
  const { data, index } = props;

  const [showTaskInfoModal, setShowTaskInfoModal] = useState(false);

  const toggleTaskInfoModal = (value) => {
    setShowTaskInfoModal(value);
  };

  return (
    <>
      <Draggable key={data.task.id} draggableId={`_${data.task.id}`} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
            onClick={() => {
              toggleTaskInfoModal(true);
            }}
          >
            {data.task.name}
          </div>
        )}
      </Draggable>
      <Modal
        size="lg"
        show={showTaskInfoModal}
        onHide={() => {
          toggleTaskInfoModal(false);
        }}
      >
        <Modal.Body>{data && <TaskInfo data={data} />}</Modal.Body>
      </Modal>
    </>
  );
}

export default Task;
