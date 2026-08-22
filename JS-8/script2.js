let button = document.getElementById("btn")
button.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML = "<b> I have created successfully</b>"
})
button.addEventListener("contextmenu", () => {
  alert("Don't hack us by right click please")
})
document.addEventListener("keydown",e=>{
    console.log(e,e.key,e.keyCode)
})