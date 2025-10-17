import React, { useState } from "react";
import { PlusSquare } from "lucide-react";
import {
  FormControl,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Card,
} from "react-bootstrap";

function AddResume() {
  const [show, setShow] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [resumes, setResumes] = useState([]); //  store created resumes

  const handleClose = () => {
    setShow(false);
    setResumeName("");
  };

  const handleShow = () => setShow(true);

  const handleCreate = () => {
    if (resumeName.trim()) {
      //  add new resume to list
      setResumes([...resumes, resumeName.trim()]);
      handleClose();
    }
  };

  return (
    <>
      <div className="d-flex flex-wrap gap-4 justify-content-start align-items-start mt-4">

        {/*  Add Resume Box */}
        <div
          className="d-flex justify-content-center align-items-center bg-secondary text-white rounded cursor-pointer"
          style={{
            width: "140px",
            height: "140px",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={handleShow}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <PlusSquare size={48} color="white" />
        </div>

        {/*  Created Resumes */}
        {resumes.map((name, index) => (
          <Card
            key={index}
            className="text-center shadow-sm border-0"
            style={{
              width: "140px",
              height: "140px",
              backgroundColor: "#1d4266ff",
            }}
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <strong>{name}</strong>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/*  Modal for new resume */}
      <Modal show={show} onHide={handleClose} centered>
        <ModalHeader closeButton>
          <ModalTitle>Create New Resume</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <FormControl
            placeholder="Enter your resume name"
            value={resumeName}
            onChange={(e) => setResumeName(e.target.value)}
            required
          />
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={handleCreate}
            disabled={!resumeName.trim()}
          >
            Create
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default AddResume;
