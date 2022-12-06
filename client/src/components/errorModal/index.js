import Modal from "react-modal";
import { useState } from "react";

import "./style.css"
Modal.setAppElement("#root");
export function ErrorModal({message, statusCode}) {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>Error {statusCode}</h2>
        <hr />
        <p>
          {message}
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}
