import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import { loadTodo } from "../actions";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispath = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo..."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispath(addItem({ title: item, done: false }));
          setItem("");
        }}
      >
        Add
      </button>
      <div>
        <button
          onClick={() => {
            dispath(loadTodo());
          }}
        >
          Load Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
