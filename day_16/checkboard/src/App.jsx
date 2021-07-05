import "./App.css";

const Square = () => {
  return <div className="square"></div>;
};

const Row = () => {
  return (
    <div className="rows">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="container">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

export default App;
