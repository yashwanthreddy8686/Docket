import React, { useState } from "react";
import { useRouter } from "next/router";
import { DragDropContext } from "react-beautiful-dnd";
import { useRequest } from "lib/hooks";
import { Board } from "components/elements";
import { BoardCardForm } from "components/forms";
import { Button } from "react-bootstrap";

function ProjectInfoPage(props) {
  const router = useRouter();
  const { project_id } = router.query;

  const { data, mutate } = useRequest(project_id && { url: `/api/projects/${project_id}/` });

  const [isBoardCreate, setBoardCreate] = useState(false);

  // console.log(data);

  if (!data) {
    return <div>Loading....</div>;
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);
  };

  return (
    <div className=" d-flex h-100">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="boards-container">
          {data.boards.map((board, index) => (
            <Board
              key={index}
              data={board}
              projectId={project_id}
              mutateData={() => {
                mutate();
              }}
            />
          ))}
          <div className="board-item">
            {isBoardCreate ? (
              <BoardCardForm
                projectId={project_id}
                onClose={() => {
                  setBoardCreate(false);
                  mutate();
                }}
              />
            ) : (
              <Button
                block
                onClick={() => {
                  setBoardCreate(true);
                }}
              >
                Create New Board
              </Button>
            )}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default ProjectInfoPage;
