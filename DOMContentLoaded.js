function ready() {
    setTimeout(remove_preloader, 1000);
}

function remove_preloader() {
    document.querySelector(".preloader").remove();
    document.querySelector("body").style.overflow = 'visible';
}

document.addEventListener("DOMContentLoaded", ready);
