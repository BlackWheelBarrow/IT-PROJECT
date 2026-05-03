let fileCss = document.getElementById("theme");
/*
function lightThemeHome(){
    fileCss.setAttribute('href', '');
    localStorage.setItem('theme', "light");
}
function darkThemeHome(){
    fileCss.setAttribute('href', 'css/darktheme.css');
    localStorage.setItem('theme', "dark");
}

function lightThemeOther(){
    fileCss.setAttribute('href', '');
    localStorage.setItem('theme', "light");
}
function darkThemeOther(){
    fileCss.setAttribute('href', '/css/darktheme.css');
    localStorage.setItem('theme', "dark");
}


-----------------------------------------------
window.addEventListener('load', function () {
    if (localStorage.getItem('theme') === "light") {
        lightThemeOther();
    }
    else if (localStorage.getItem('theme') === "dark") {
        darkThemeOther();
    }

});
*/
const users = JSON.parse(localStorage.getItem('users')) || {};
function signup(name, email, password, confirmpass, number) {
        if (!name || !email || !password || !confirmpass || !number) {
            window.alert("all fields are required");
        }
        else if (users[email]) {
            window.alert("email already exists");
             window.location.href = "login.html";
        }
        else if (password === confirmpass) {
            users[email] = {
                name: name,
                email: email,
                number: number,
                password: password,
            };
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentuser', JSON.stringify(users[email]));
            window.location.href = "profile.html";
        }

    }


function login(email, password) {
        if (!email || !password) {
            window.alert("both fields are required");
        }
        else if (users[email] && users[email].password === password) {
            localStorage.setItem('currentuser', JSON.stringify(users[email]));
            window.location.href = "profile.html";
        }
        else {
            window.alert("wrong email or password");
        }



    }

function profileUpdate() {
    const currentuser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentuser) {
        
        window.location.href = "login.html";
        window.alert("please login first");

    }
    else {
        document.getElementById("uemail").innerHTML = currentuser.email;
        document.getElementById("uname").innerHTML = currentuser.name;
        document.getElementById("unum").innerHTML = currentuser.number;
    }
}
function signoutButton() {
    localStorage.removeItem('currentuser');
    window.alert("Signed out");
    window.location.href = "login.html";
}
