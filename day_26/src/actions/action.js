const changeEmail = (email) => {
  return {
    type: "ChangeEmail",
    name: email,
  };
};

const changeUsername = (username) => {
  return {
    type: "ChangeUsername",
    name: username,
  };
};

export { changeUsername, changeEmail };
