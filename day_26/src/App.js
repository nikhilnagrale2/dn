import "./App.css";
import { changeUsername, changeEmail } from "./actions/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.changeReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Steps</h2>
      <div className="steps">
        <li>Create a user state using redux</li>
        <li>Update user state when input is changed</li>
        <li>
          Create a seperate component and display user data(Don't Pass it as
          Props)
        </li>
      </div>
      <div className="Inputs">
        <h2>Input</h2>
        <div className="flex">
          <div>
            <input
              placeholder="Username"
              name="username"
              onChange={(e) => {
                dispatch(changeUsername(e.target.value));
              }}
            ></input>
          </div>
          <div>
            <input
              placeholder="Email"
              name="email"
              onChange={(e) => {
                dispatch(changeEmail(e.target.value));
              }}
            ></input>
          </div>
        </div>
      </div>
      <div>
        <h2>Data</h2>
        <h4>Username:{state.username}</h4>
        <h4>Email:{state.email}</h4>
      </div>
    </div>
  );
}

export default App;
