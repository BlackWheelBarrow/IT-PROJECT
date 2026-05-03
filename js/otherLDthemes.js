let fileCss = document.getElementById("theme");
function lightTheme() {
    fileCss.setAttribute('href', '');
    localStorage.setItem('theme', "light");
}
function darkTheme() {
    fileCss.setAttribute('href', '../css/darktheme.css');
    localStorage.setItem('theme', "dark");
}

window.addEventListener('load', function () {
    if (localStorage.getItem('theme') === "light") {
        lightTheme();
    }
    else if (localStorage.getItem('theme') === "dark") {
        darkTheme();
    }

});
