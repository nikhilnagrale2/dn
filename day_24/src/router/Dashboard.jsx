import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/AuthContext";

function Dashboard(props) {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1>Dashboard</h1>
        {logger.loggedIn ? (
          "Welcome to Dashboard"
        ) : (
          <Redirect to="/"></Redirect>
        )}
      </Route>
    </div>
  );
}

export default Dashboard;
