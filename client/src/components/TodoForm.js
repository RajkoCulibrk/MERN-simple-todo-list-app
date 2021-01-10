import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addTodo } from "../context/user/actions";
import { useStateValue } from "../context/user/StateProvider";

const TodoForm = () => {
  const [state, dispatch] = useStateValue();
  const { user } = state;
  const [text, setText] = useState("");
  const [completed, setStatus] = useState(false);
  const [important, setImportance] = useState(false);
  console.log(important);
  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(dispatch, { text, important });
    setText("");
    setImportance(false);
  };
  return (
    <Form
      onSubmit={submitHandler}
      className="bg-secondary rounded p-3 p-sm-0  mt-3 d-flex align-items-center justify-content-center flex-sm-row flex-column "
    >
      <Form.Group>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New todo"
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          checked={important}
          onChange={() => setImportance(!important)}
          className="m-sm-5"
          label="Urgent"
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;
