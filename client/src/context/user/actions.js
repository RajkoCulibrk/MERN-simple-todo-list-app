import axios from "axios";

import setAuthToken from "../../utils/setAuthToken";
export const register = async (dispatch, formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/users", formData, config);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "REGISTER_FAIL",
      payload: err.response.data.msg,
    });
  }
};

export const login = async (dispatch, formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/auth", formData, config);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "REGISTER_FAIL",
      payload: err.response.data.msg,
    });
  }
};

export const loadUser = async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    console.log("auth set");
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({ type: "LOAD_USER", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL", payload: err.response.data.msg });
  }
};

export const addTodo = async (dispatch, formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    axios.post("/api/todos", formData, config);
  } catch (err) {
    console.log(err.response.data.msg);
  }
};

export const loadTodos = async (dispatch) => {
  try {
    const res = await axios.get("/api/todos");
    dispatch({ type: "LOAD_TODOS", payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
