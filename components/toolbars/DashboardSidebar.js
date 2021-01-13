import React, { useState } from "react";
// react- bootstrap
import { Button, Navbar, ListGroup, Modal } from "react-bootstrap";
// components
import { ProjectsList } from "components/lists";

function DashboardSidebar() {
  return (
    <div>
      <div className="sidebar-brand">
        <Navbar.Brand className="text-white">Docket</Navbar.Brand>
      </div>
      <ListGroup variant="flush" className="mb-2">
        {/* <ListGroup.Item className="text-white bg-transparent">Overview</ListGroup.Item>
        <ListGroup.Item className="text-white bg-transparent">Sprints</ListGroup.Item> */}
        <ListGroup.Item className="text-white bg-transparent">
          <h5>
            Projects
            <Button size="sm" className="float-right" variant="light" onClick={handleShow}>
              +
            </Button>
          </h5>
        </ListGroup.Item>
      </ListGroup>
      {data && (
        <ProjectsList
          data={data}
          mutateList={() => {
            mutate();
          }}
        />
      )}
    </div>
  );
}
export default DashboardSidebar;
