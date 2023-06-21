import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

import "./Todolist.css";
import Createtask from "./modals/Createtask";

const Todolist = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="header">
        <h1>TODO LIST</h1>
        <Button className="create" onClick={() => setModal(true)}>
          Create Task
        </Button>
      </div>

      <div className="content"></div>
      <Createtask toggle={toggle} modal={modal} />
    </>
  );
};

export default Todolist;
