import React from "react";
import "./styles/modalReference.css";

const ModalReference = () => {
  return (
    <div
      className="modal fade modal_"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content body_modal"></div>
      </div>
    </div>
  );
};

export default ModalReference;
