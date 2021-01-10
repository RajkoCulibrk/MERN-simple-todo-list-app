import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserStateProvider } from "./context/user/StateProvider";
import reducer, { initialState } from "./context/user/reducer";

ReactDOM.render(
  <UserStateProvider initialState={initialState} reducer={reducer}>
    <App />
  </UserStateProvider>,
  document.getElementById("root")
);
