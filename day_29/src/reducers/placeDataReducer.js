const placeDataReducer = (state = {}, actions) => {
  if (actions.type === "Update_Place_Data") {
    return actions.payload;
  }
  return state;
};

export default placeDataReducer;
