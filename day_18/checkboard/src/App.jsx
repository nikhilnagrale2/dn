import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const Square = (props) => {
  return (
    <div className={props.odd === "true" ? "square-odd" : "square-even"}></div>
  );
};

const Rows = (props) => {
  return (
    <div className={props.odd === "true" ? "rows-odd" : "rows-even"}>
      {numbers.map((item) => (
        <Square odd={item % 2 === 0 ? "false" : "true"} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="container">
        {numbers.map((item) => (
          <Rows odd={item % 2 === 0 ? "false" : "true"} />
        ))}
      </div>
    </div>
  );
}

export default App;
