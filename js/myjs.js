let close = document.getElementById("fffff");
let nav = document.getElementById("navbar");

if(localStorage.getItem("issmall")==="yes"){
  nav.classList.add("nav1");
}else{
  nav.classList.remove("nav1")
}
function remo() {
  if (localStorage.getItem("issmall") == "yes") {
    localStorage.setItem("issmall", "no");
    nav.classList.remove("nav1");
  } else {
   
    localStorage.setItem("issmall", "yes");
      nav.classList.add("nav1");
  }


}
close.addEventListener("click", remo);
