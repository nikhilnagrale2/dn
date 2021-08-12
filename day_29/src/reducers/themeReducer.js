const themeReducer = (state = false, action) => {
  if (action.type === "Toggle_Theme") {
    return !state;
  }
  return state;
};

export default themeReducer;
