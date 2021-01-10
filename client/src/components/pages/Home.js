import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { loadTodos, loadUser } from "../../context/user/actions";
import { useStateValue } from "../../context/user/StateProvider";
import TodoForm from "../TodoForm";

const Home = ({ history }) => {
  const [state, dispatch] = useStateValue();
  const { authenticated } = state;

  useEffect(() => {
    if (localStorage.token) {
      loadUser(dispatch);
    }
    if (!authenticated) {
      history.push("/login");
    }
    loadTodos(dispatch);
  }, []);
  return (
    <Container className=" d-flex justify-content-center flex-column">
      <TodoForm></TodoForm>
    </Container>
  );
};

export default Home;
