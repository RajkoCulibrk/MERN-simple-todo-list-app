import React, { useEffect } from "react";
import { useStateValue } from "../../context/user/StateProvider";
const Home = ({ history }) => {
  const [state, dispatch] = useStateValue();
  const { authenticated } = state;
  useEffect(() => {
    if (!authenticated) {
      history.push("/login");
    }
  });
  return <div>kuca</div>;
};

export default Home;
