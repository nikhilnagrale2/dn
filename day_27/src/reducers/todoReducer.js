const todoReducer = (state = [], action) => {
  if (action.type === "Add_Item") {
    return [...state, action.payload];
  } else if (action.type === "Remove_Item") {
    return state.filter((item, index) => index !== action.payload);
  } else if (action.type === "Load_Todo") {
    return action.payload;
  }
  return state;
};

export default todoReducer;
