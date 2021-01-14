//changing things in the dom

//const ul = document.querySelector(".items")

//ul.remove()
//ul.lastElementChild.remove()
//ul.firstElementChild.textContent = "Hello"
//ul.children[1].innerText = "Kitty"
//ul.lastElementChild.innerHTML = "<h1>Cat</h1>"

const btn = document.querySelector(".btn")
//btn.style.background = "red"

//btn.addEventListener("click", (e) => {
//    e.preventDefault()
//    console.log("click")
//})

//get info on element
//btn.addEventListener("click", (e) => {
//    e.preventDefault()
//    console.log(e.target.className)
//})

//instead of "click" can also use "mouseover" or "mouseout" or other mouse actions
btn.addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelector("#my-form").style.background = "#ccc"
  document.querySelector("body").classList.add("bg-dark")
  document.querySelector(".items").lastElementChild.innerHTML = "<h1>CAT</h1>"
})
