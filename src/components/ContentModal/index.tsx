import { useState } from "react"
import { Modal } from "react-bootstrap";

export function ContentModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleModal() {

  }
 
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
    </Modal>
  )
}