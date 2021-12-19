function ready() {
    setTimeout(remove_preloader, 10);
}

function remove_preloader() {
    document.querySelector(".preloader").remove();
    document.querySelector("body").style.overflow = 'visible';
}

document.addEventListener("DOMContentLoaded", ready);