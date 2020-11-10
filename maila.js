//select element function//
const selecElement = function (element){
    return document. querySelector(element);
};

let menuToggler = selecElement('.menu-toggle');
let body = selecElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});