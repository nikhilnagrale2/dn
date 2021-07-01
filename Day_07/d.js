var library = [{
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let item of library) {
  console.log("Book Title: " + item.title);
  console.log("Author Name: " + item.author);
  console.log("Is Book Read? : " + item.readingStatus);
  console.log();
}