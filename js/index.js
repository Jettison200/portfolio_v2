window.onscroll = changeNav;
document.getElementById("ham").onclick = slideInNav;
document.getElementById('slide-in-menu').onclick = hide;
/* document.getElementById("lable1").onclick = contactAnimation;
document.getElementById("lable2").onclick = contactAnimation2;
document.getElementById("lable3").onclick = contactAnimation3;
document.getElementById("lable4").onclick = contactAnimation4; */

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

function contactAnimation() {
  let label1 = document.getElementById("contactAnimation");
  label1.style.width = "100%";

  let label2 = document.getElementById("contactAnimation2");

  label2.style.width = "0px";
  let label3 = document.getElementById("contactAnimation3");

  label3.style.width = "0px";

  let label4 = document.getElementById("contactAnimation4");

  label4.style.width = "0px";
}

function contactAnimation2() {
  let label1 = document.getElementById("contactAnimation");
  label1.style.width = "0px";

  let label2 = document.getElementById("contactAnimation2");

  label2.style.width = "100%";
  let label3 = document.getElementById("contactAnimation3");

  label3.style.width = "0px";

  let label4 = document.getElementById("contactAnimation4");

  label4.style.width = "0px";
}

function contactAnimation3() {
  let label1 = document.getElementById("contactAnimation");
  label1.style.width = "0px";

  let label2 = document.getElementById("contactAnimation2");

  label2.style.width = "0px";
  let label3 = document.getElementById("contactAnimation3");

  label3.style.width = "100%";

  let label4 = document.getElementById("contactAnimation4");

  label4.style.width = "0px";
}

function contactAnimation4() {
  let label1 = document.getElementById("contactAnimation");
  label1.style.width = "0px";

  let label2 = document.getElementById("contactAnimation2");

  label2.style.width = "0px";
  let label3 = document.getElementById("contactAnimation3");

  label3.style.width = "0px";

  let label4 = document.getElementById("contactAnimation4");

  label4.style.width = "100%";
}
