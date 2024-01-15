const _toggle = document.getElementById("_toggle");
const _menu = document.getElementById("_menu");

_toggle.onclick = () => {
    _menu.classList.toggle("open");
    _toggle.classList.toggle("close");
};
