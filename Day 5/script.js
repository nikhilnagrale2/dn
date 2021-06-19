window.onload = () => {
  const first_input = document.getElementById("first");
  const second_input = document.getElementById("second");

  const buttons = document.querySelectorAll("button");

  const add = buttons[0];
  const subtract = buttons[1];
  const multiply = buttons[2];
  const divide = buttons[3];
  console.log(first_input.value);
};
