import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./router/Home";
import Dashboard from "./router/Dashboard";
import About from "./router/About";
import Profile from "./router/Profile";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid ">
            {/* <div className="collapse navbar-collapse"> */}
              <ul className="navbar-nav  me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    DashBoard
                  </Link>
                </li>
              </ul>
            </div>
          {/* </div> */}
        </nav>

        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/profile" component={Profile}></Route>
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
