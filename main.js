const nav =  document.getElementsByClassName("navbar");
window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        nav[0].style.backgroundColor = "black";
    }
    else {
        nav[0].style.backgroundColor = "unset";
    }
}

function menuToggle()
{
    let nav = document.querySelector('.navbar-ul');
    let toggle = document.querySelector('.navbar-toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}