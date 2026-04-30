let fileCss = document.getElementById("theme");
function lightTheme(){
    fileCss.setAttribute('href','');
}
function darkTheme(){
    fileCss.setAttribute('href','../css/darktheme.css');
}



let users = JSON.parse(localStorage.getItem('users')) || {};


function signup(name, email, password, confirmpass) {
    if (!name || !password || !email || !confirmpass) {
        window.alert("all fields are required");
    }
    else if (users[email]) {
        window.alert("email already exists");
    }
    else if (password === confirmpass) {
        users[email] = {
            email: email,
            password: password,
            name: name,
        };
        localStorage.setItem('currentuser', JSON.stringify(users[email]));
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "profile.html";
        window.alert("done");
    }
}
function login(email, password) {
    if (!email || !password) {
        window.alert("email and password are required");
    }
    else if (users[email] && users[email].password === password) {
        localStorage.setItem('currentuser', JSON.stringify(users[email]));
        window.location.href = "profile.html";
    }
    else {
        window.alert("Wrong username or password");
    }
}


function profileUpdate() {
    const currentuser = JSON.parse(localStorage.getItem('currentuser'));
    document.getElementById("uname").innerHTML = currentuser.name;
    document.getElementById("uemail").innerHTML = currentuser.email;
}
