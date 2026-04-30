let alertWindow = document.getElementById("bookingAlerts");
let submitButton = document.getElementById("submit");
let canSubmit = -1;

let makeMinDate = new Date().toISOString().split('T')[0]; // from stackoverflow
document.getElementById("arivalDate").setAttribute("min",makeMinDate);
let msgs = [];
msgs[0] = document.createElement("h6");
msgs[1] = document.createElement("h6");
msgs[2] = document.createElement("h6");
msgs[3] = document.createElement("h6");
msgs[4] = document.createElement("h6");

msgs[0].style.cssText = `padding : 2px 5px;`;
msgs[1].style.cssText = `padding : 2px 5px;`;
msgs[2].style.cssText = `padding : 2px 5px;`;
msgs[3].style.cssText = `padding : 2px 5px;`;
msgs[4].style.cssText = `padding : 2px 5px;`;

let firstName = "nothing";
let lastName = "nothing";
let noOfNights = 0;
let noOfRooms = 0;
let noOfAdults = 0;
let noOfChilds = 0;

let MaxHumanPerRoom = 2;

let humanCounter = 0;

let noOFExpectedRooms = (MaxHumanPerRoom * noOfRooms);

function fnameCheck(){
    firstName = document.getElementById("firstName").value;
    if(isNaN(firstName)){
        if( firstName.length < 3 ){
            canSubmit = -1;
            msgs[3].innerText = "First Name is too short";
            msgs[3].style.display = "block";
            alertWindow.append(msgs[3]);
        }
        else if( firstName.length > 10 ){
            canSubmit = -1;
            msgs[3].innerText = "First Name is too logn";
            msgs[3].style.display = "block";
            alertWindow.append(msgs[3]);
        }else if( 
            firstName.includes("@") ||
            firstName.includes("#") ||
            firstName.includes("_") ||
            firstName.includes(" ") 
            
        ){
            msgs[3].innerText = "special characters or spaces not allowed only ( - )";
            msgs[3].style.display = "block";
            alertWindow.append(msgs[3]);
            canSubmit = -1;
        }else {
            msgs[3].style.display = "none";
            canSubmit = 1;
        }
    }else {
        canSubmit = -1;
        msgs[3].innerText = "Enter a name not a number";
        msgs[3].style.display = "block";
        alertWindow.append(msgs[3]);
    }
}
function lnameCheck(){
    lastName = document.getElementById("lastName").value;
    if(isNaN(lastName)){
        if( lastName.length < 3 ){
            canSubmit = -1;
            msgs[4].innerText = "Last Name is too short";
            msgs[4].style.display = "block";
            alertWindow.append(msgs[4]);
        }
        else if( lastName.length > 10 ){
            canSubmit = -1;
            msgs[4].innerText = "last Name is too logn";
            msgs[4].style.display = "block";
            alertWindow.append(msgs[4]);
        } else {
            msgs[4].style.display = "none";
            canSubmit = 1;
            
        }
    }else {
        canSubmit = -1;
        msgs[4].innerText = "Enter a name not a number";
        msgs[4].style.display = "block";
        alertWindow.append(msgs[4]);
    }
}

function checkSubmit(){
    if(canSubmit == 1){
        document.getElementById("ziad").requestSubmit();
                                    // ^^^^^^^^^^^^^^^^  by the help of AI
    }
}

function numNightsCheck(){
    
    noOfNights = Number(document.getElementById("noOFNights").value);
    if(noOfNights <= 0){
        canSubmit = -1;
        msgs[0].innerText = "Number of nights should be from greater than 0"
        msgs[0].style.display = "block";
        alertWindow.append(msgs[0]);
    }else {
        msgs[0].style.display = "none";
        canSubmit = 1;
    }
    
}

function numRoomsCheck(){
    noOfRooms = Number(document.getElementById("rooms").value);
    noOfChilds = Number(document.getElementById("children").value);
    noOfAdults = Number(document.getElementById("adults").value);
    noOFExpectedRooms = (MaxHumanPerRoom * noOfRooms);
    
    if(
        (noOfAdults == 0 && noOfChilds == 0) ||
        (noOfAdults != 0 && noOfChilds == 0) ||
        (noOfAdults == 0 && noOfChilds != 0) ||
        (noOfAdults != 0 && noOfChilds != 0 && noOfRooms == 0) 
        
    ){
        
    }
    else if(noOFExpectedRooms <  noOfChilds + noOfAdults){
        msgs[1].innerText = `number of indvisuals is more than the capacity of rooms - Max is ${noOFExpectedRooms}`;
        msgs[1].style.display = "block";
        alertWindow.append(msgs[1]);
        canSubmit = -1;
    }else if(noOfRooms >  noOfAdults + noOfChilds ){
        canSubmit = -1;
        msgs[1].innerText = `You can't book more than ${noOfChilds + noOfAdults} Rooms`;
        msgs[1].style.display = "block";
        alertWindow.append(msgs[1]);
    }
    else {
        msgs[1].style.display = "none";
        canSubmit = 1;
    }
}
function numChildsCheck(){
    numRoomsCheck();
}
function numAdultsCheck(){
    numRoomsCheck();
}
