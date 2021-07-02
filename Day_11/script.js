const questions = [
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
];

let score = 0;

function createOption(option, answer = false) {
  const optionHolder = document.createElement("div");
  optionHolder.className = "option";

  const button = document.createElement("button");
  button.addEventListener("click", () => {
    if (answer == false) {
      button.classList.add("wrong");
    } else {
      if (!button.classList.contains("correct")) {
        score++;
      }
      button.classList.add("correct");
    }
  });
}

questions.forEach((current, number) => {
  console.log(current, number);
  const container = document.createElement("div");
  container.className = "container";

  const question = document.createElement("div");
  question.className = "question";
  question.innerHTML = `${number}. ${current.question}`;

  container.append(question);

  const options = document.createElement("div");
  options.className = "options";

  const optionArray = [];
  current.options.forEach((option, number) => {
    if (number == 0) {
      optionArray.push(createOption(option, true));
    } else {
      optionArray.push(createOption(option));
    }
  });

  optionArray.forEach((option) => {
    options.append(option);
  });
  container.append(options);

  document.body.append(container);
});
