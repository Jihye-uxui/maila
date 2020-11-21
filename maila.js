//select element function//
const selecElement = function (element){
    return document. querySelector(element);
};

let menuToggler = selecElement('.menu-toggle');
let body = selecElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});


// One of menu only works //

// window.onscroll = scrollShowNav;
// function scrollShowNav() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       document.getElementsByClassName("nav-list").style.backgroundColor = "red";
//    } else {
//       document.getElementsByClassName("nav-list").style.backgroundColor = "black";
//    }
// }

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

