
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
    else if (!(email.toLowerCase().endsWith("@gmail.com"))) { // validating the email
        window.alert("please enter a valid email");
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
    else if (password !== confirmpass) {//validating the passwords
        window.alert("passwords don't match");
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

/*-----------------------------------------------------*/ 
// by Ziad Wael - mobile nav
let mobilenavbutton = document.getElementById("listForMobile");
let mobilenav = document.getElementById("navformobile");

function shownav(){
    mobilenav.style.display = "flex";
}
function backbutton(){
    mobilenav.style.display = "none";
}

let playbutton = document.getElementById("playbutton");
let pausebutton = document.getElementById("pausebutton");
function audioplay() {
    let x = document.getElementById("seasound");
    x.play();
    playbutton.style.display = "block";
    pausebutton.style.display = "none";
}

function audiopause() {
    let x = document.getElementById("seasound");
    x.pause();
    playbutton.style.display = "none";
    pausebutton.style.display = "block";
}

function contactusvalidation(name,number,mail,subject,message) {
    if (!name || !number || !mail || !subject || !message) {
        window.alert("all fields are required"); //checking if tall the fields are filled
    }
    else if (!(mail.toLowerCase().endsWith("@gmail.com"))) {
            window.alert("please enter a valid email"); //checking if the email is valid
        }
    else {
        window.alert("we got your response and we will reach out to you as soon as possible"); //if the data is correct 
        }
}