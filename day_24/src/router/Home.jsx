import React, { useContext } from "react";
import Context from "../context/AuthContext";

function Home(props) {
  const logger = useContext(Context);
  const toggleLogin = () => {
    logger.toggleLogin();
  };
  return (
    <div>
      <h1>Home</h1>
      <div>Login to access Profile & Dashboard </div>
      {logger.loading ? (
        <button>Loading....</button>
      ) : logger.loggedIn ? (
        <button onClick={logger.logout}>Logout</button>
      ) : (
        <button onClick={logger.login}>Login</button>
      )}
    </div>
  );
}

export default Home;
