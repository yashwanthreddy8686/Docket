import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Button, Dropdown, Modal } from "react-bootstrap";
// components
import { TaskCardForm } from "components/forms";
import { Task, BoardTitle } from "components/elements";
// custom hooks
import { useRequest } from "lib/hooks";
// icons
import { FaEllipsisV } from "react-icons/fa";
// services
import BoardService from "services/BoardService";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 8,
  borderRadius: "4px",
});

function Board(props) {
  const { data, mutateData, projectId } = props;

  const [isCreateCardState, setCreateCardState] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const hideDeleteModal = () => setDeleteModalOpen(false);
  const showDeleteModal = () => setDeleteModalOpen(true);

  const handleBoardDelete = () => {
    BoardService.delete(data.id).then((response) => {
      hideDeleteModal();
      mutateData();
    });
  };
  // data fetching
  // const { data: taskInfo } = useRequest({ url: selectedTaskId && `/api/tasks/${selectedTaskId}` });

  return (
    <>
      <Droppable droppableId={`${data.id}`}>
        {(provided, snapshot) => (
          <div
            className="board-item"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <div className="board-info">
              <BoardTitle text={data.name} boardId={data.id} projectId={projectId} />
              <Dropdown className="board-more-button">
                <Dropdown.Toggle variant="light">
                  <FaEllipsisV />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={showDeleteModal}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {data.tasks.map((item, index) => (
              <Task data={item} index={index} key={index} />
            ))}
            {isCreateCardState ? (
              <TaskCardForm
                boardId={data.id}
                onClose={() => {
                  setCreateCardState(false);
                  mutateData();
                }}
              />
            ) : (
              <Button
                block
                size="sm"
                variant="light"
                onClick={() => {
                  setCreateCardState(true);
                }}
              >
                Create New Card
              </Button>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Modal show={isDeleteModalOpen} onHide={hideDeleteModal}>
        <Modal.Body>
          <h5 className="text-center mb-4">Are you sure you want to remove this board?</h5>
          <div className="text-center">
            <Button variant="danger" onClick={handleBoardDelete}>
              Delete
            </Button>
            &nbsp;&nbsp;
            <Button variant="light" onClick={hideDeleteModal}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Board;
