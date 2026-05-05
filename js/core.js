
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
    let err = false;
    document.getElementById('error1').style.display = "none";
    document.getElementById('error2').style.display = "none";
    document.getElementById('error3').style.display = "none";
    document.getElementById('error4').style.display = "none";
    if (!name || !email || !password || !confirmpass || !number) {
        document.getElementById('error1').style.display = "block";
        err = true;
    }
    
    if (!(email.includes('@')) || !(email.includes('.')) || email.indexOf===0) { // validating the email
        document.getElementById('error2').style.display = "block";
        err = true;
    }
    if (number.length !== 11 || isNaN(number)) {
        document.getElementById('error4').style.display = "block";
        err = true;
    }
    if (password !== confirmpass) {//validating the passwords
        document.getElementById('error3').style.display = "block";
        err = true;
    }
    if (users[email] && !err) {//if the email exist
        document.getElementById('emexist').style.display = "block"; 
        setTimeout(() => {
            window.location.href = "login.html"
        }, 1000);
        return;
    }
    if (!err) { //if the signup is successfull
        users[email] = {
            name: name,
            email: email,
            number: number,
            password: password,
        };
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentuser', JSON.stringify(users[email]));
        document.getElementById('succes').style.display = "block";
        setTimeout(() => {
            window.location.href = "profile.html"
        }, 2000);
       
    }
    }
/*---------------------login page--------------------------------*/
let loginh4error = document.createElement("h4");
loginh4error.style.cssText = `
    padding : 10px 20px;
    color : #ffffff;
    font-weight : 200;
    margin-bottom : 10px;
    border-radius : 10px;
`;
let loginWindow  = document.getElementById("loginerror");
let loginerrortext = [
    "both fields are required",
    "wrong email or password",
    "Invalid mail"
];
function login(email, password) {
    if (!email || !password) {
        loginh4error.innerText = loginerrortext[0];
        loginWindow.append(loginh4error);
    }
    else if (users[email] && users[email].password === password) {
        localStorage.setItem('currentuser', JSON.stringify(users[email]));
        window.location.href = "profile.html";
    }
    else {
        loginh4error.innerText = loginerrortext[1];
        loginWindow.append(loginh4error);
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

/*-----------------------------audio----------------------*/
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

/*-----------------------contact us---------------------------*/
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

