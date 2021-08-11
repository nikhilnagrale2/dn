const InitialState = {
  username: "",
  email: "",
};

const changeReducer = (state = InitialState, action) => {
  if (action.type === "ChangeUsername") {
    return {
      ...state,
      username: action.name,
    };
  } else if (action.type === "ChangeEmail") {
    return {
      ...state,
      email: action.name,
    };
  }
  return state;
};

export default changeReducer;
