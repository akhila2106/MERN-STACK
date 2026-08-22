let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="pink"
document.getElementById("blue").style.backgroundColor="lightblue";;
document.querySelector(".box").style.backgroundColor="royalblue";
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box")[1].style.backgroundColor="lightyellow";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="violet";
})