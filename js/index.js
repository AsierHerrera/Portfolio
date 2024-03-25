function toggleNavbar() {
    let navbar = document.getElementById("myNavbar");
    let ul = navbar.getElementsByTagName("ul")[0];
    if (window.innerWidth <= 768) {
        ul.classList.toggle("responsive");
    } else {
        ul.classList.remove("responsive");
    }
}