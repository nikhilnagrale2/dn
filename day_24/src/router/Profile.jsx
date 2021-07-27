import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/AuthContext";

function Profile(props) {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1>Profile</h1>
        <div>
          {logger.loggedIn ? (
            "Welcome to Profile"
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </div>
      </Route>
    </div>
  );
}

export default Profile;
