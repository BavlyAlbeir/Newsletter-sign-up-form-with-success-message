let container = document.querySelector(".container")
let email = document.querySelector("input[type='email']");
let submit = document.querySelector("input[type='submit']");

let message = document.querySelector(".success")
let btn = document.querySelector(".success .btn")
let span = document.querySelector(".success p span")

document.forms[0].addEventListener("submit", function (e) {
  if (email.value.includes("@") && email.value.length >= 15) {
    span.textContent = email.value;
    container.style.display = "none";
    message.style.display = "block";
  } else {
    email.setAttribute("class","false");
  }
  e.preventDefault();
});

// on click btn of success message 
btn.addEventListener("click",()=>{
    btn.parentElement.style.display="none";
    container.style.display ="flex"
    email.value ="";
    if (email.classList.contains("false")){
      email.classList.remove("false")
    }
})


// window in resize
let w = 0;
let img = document.querySelector(".img img")
console.log(img.attributes)
window.onresize = function(){
w = window.innerWidth;
if ( w <=550){
    img.setAttribute("src","images/illustration-sign-up-mobile.svg");
}else{
    img.setAttribute("src","images/illustration-sign-up-desktop.svg")

}
}