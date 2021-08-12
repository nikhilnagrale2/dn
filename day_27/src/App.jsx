import "./App.css";
import ListTodo from "./components/listTodo";
import AddTodo from "./components/addTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <AddTodo />
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
