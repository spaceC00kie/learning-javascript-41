//console.log(window)
//alert(1)

//single element selectors for the dom
//console.log(document.getElementById("my-form"))
//console.log(document.querySelector(".container"))

//multiple element selectors
//console.log(document.querySelectorAll(".item"))
//console.log(document.getElementsByClassName("my-form"))
//console.log(document.getElementsByTagName("li"))

const items = document.querySelectorAll(".item")
items.forEach((item) => console.log(item))
