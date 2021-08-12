const placeReducer = (state = "", actions) => {
  if (actions.type === "Update_Place") {
    return actions.payload;
  }
  return state;
};
export default placeReducer;
