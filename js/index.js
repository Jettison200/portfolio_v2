window.onscroll = changeNav;
document.getElementById("ham").onclick = slideInNav;
document.getElementById('slide-in-menu').onclick = hide;

let toggle = 0;

function changeNav() {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    document.getElementById("nav").classList.add("change");
  } else {
    document.getElementById("nav").classList.remove("change");
  }
}

function slideInNav() {
  if (toggle == 0) {
    let element = document.getElementById("ham");
    element.classList.add("is-active");
    document.getElementById('slide-in-menu').style.width = "250px";

    toggle = 1;

  } else {
    let element = document.getElementById("ham");
    element.classList.remove("is-active");
    document.getElementById('slide-in-menu').style.width = "0px";
    toggle = 0;

  }
}

function hide() {
  document.getElementById('slide-in-menu').style.width = "0px";
  let element = document.getElementById("ham");
    element.classList.remove("is-active");
  toggle =0;
}