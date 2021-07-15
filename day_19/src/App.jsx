import "./App.css";
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>{this.state.count}</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>
        There are 4 counter component instances that each manage their own
        state.
      </h1>
      <div className="container">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
/*
function App(props) {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() =>{
        count newCount = count+1;
        setCount(newCount);
        console.log(count);
      }}>{count}</button>
    </div>
  );
}
*/
