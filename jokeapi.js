const fetch = require("node-fetch")

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((funny) => console.log(funny.value))
