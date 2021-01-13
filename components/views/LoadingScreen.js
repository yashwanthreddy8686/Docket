import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingScreen() {
  return (
    <div className="full-screen-container">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default LoadingScreen;
