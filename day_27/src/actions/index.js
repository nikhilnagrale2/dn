const addItem = (item) => {
  return {
    type: "Add_Item",
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: "Remove_Item",
    payload: id,
  };
};

const loadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        return dispatch({
          type: "Load_Todo",
          payload: todos,
        });
      });
  };
};

export { addItem, removeItem, loadTodo };
