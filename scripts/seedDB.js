const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/testBookDB", { useNewUrlParser: true }
);

const bookSeed = [
  {
    title: "The Dead Zone",
    author: ["Stephen King", "William Golding"],
    link: "link.address1",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    author: ["William Golding", "Stephen King"],
    link: "link.address2",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    author: ["Stephen King"],
    link: "link.address3",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " book records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
