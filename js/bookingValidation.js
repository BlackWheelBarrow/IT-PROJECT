let date = new Date().toISOString().split("T")[0];
document.getElementById("arivalDate").setAttribute("min",date);
function bigfunc(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let mail = document.getElementById("mail").value;
    let arivalDate = document.getElementById("arivalDate").value;
    let noOFNights = document.getElementById("noOFNights").value;
    let rooms = document.getElementById("rooms").value;
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let thedate = document.getElementById("arivalDate").value;
    
    let roomlimit = 2;
    let Excpectedminindvisual = roomlimit * rooms;
    let indvisuals = Number(adults) + Number(children);

    let counter = 9;

    let bookingerror1 = document.getElementById("bookingerror1");
    let bookingerror2 = document.getElementById("bookingerror2");
    let bookingerror3 = document.getElementById("bookingerror3");
    let bookingerror4 = document.getElementById("bookingerror4");
    let bookingerror5 = document.getElementById("bookingerror5");
    let bookingerror6 = document.getElementById("bookingerror6");
    let bookingerror7 = document.getElementById("bookingerror7");
    let bookingerror8 = document.getElementById("bookingerror8");
    let bookingerror9 = document.getElementById("bookingerror9");
    let indvisualserror = document.getElementById("indvisualserror");
    let capacityerror = document.getElementById("capacityerror");
    let manyroomserror = document.getElementById("manyroomserror");
    let successbooking = document.getElementById("successbooking");
    
    manyroomserror.innerText = `Max Rooms To Book Is ${indvisuals} Rooms`;
    capacityerror.innerText = `Max capacity for ${rooms} Rooms is ${Excpectedminindvisual} Guests`;

    bookingerror1.style.display = "none";
    bookingerror2.style.display = "none";
    bookingerror3.style.display = "none";
    bookingerror4.style.display = "none";
    bookingerror5.style.display = "none";
    bookingerror6.style.display = "none";
    bookingerror7.style.display = "none";
    bookingerror8.style.display = "none";
    bookingerror9.style.display = "none";
    indvisualserror.style.display = "none";
    capacityerror.style.display = "none";
    manyroomserror.style.display = "none";
    successbooking.style.display = "none";

    if(firstName.length < 3 && !( /\d/.test(firstName) )){ 
        counter = counter - 1;      
        bookingerror1.style.display = "block";
    } 
    if(lastName.length < 3 && !( /\d/.test(lastName) )) {
         bookingerror2.style.display = "block";
        counter = counter - 1;      
    }

    if(
        /\d/.test(firstName) ||   /\d/.test(lastName) || 
        firstName.includes("@") || lastName.includes("@") ||
        firstName.includes("#") || lastName.includes("#") ||
        firstName.includes("_") || lastName.includes("_") ||
        firstName.includes("$") || lastName.includes("$") ||
        firstName.includes("%") || lastName.includes("%") ||
        firstName.includes("^") || lastName.includes("^") ||
        firstName.includes("&") || lastName.includes("&") ||
        firstName.includes("*") || lastName.includes("*") ||
        firstName.includes("(") || lastName.includes("(") ||
        firstName.includes(")") || lastName.includes(")") 
      ) {
        bookingerror3.style.display = "block";
        counter--;      
    } 
        
        
    if(noOFNights < 0 || noOFNights == 0){
        bookingerror4.style.display = "block";        
        counter--;      
    }
    if(rooms < 0 || rooms == 0){
        bookingerror5.style.display = "block";        
        counter--;      
    }
    if(children < 0 || children == 0){
        bookingerror7.style.display = "block";        
        counter--;      
    }
    if(adults < 0  || adults == 0){
        bookingerror6.style.display = "block";        
        counter--;      
    }
    
    if(! (mail.includes("@") && mail.includes(".") && !(mail.startsWith("@")) )){
        bookingerror8.style.display = "block";        
        counter--;      
    }
    
    if(rooms > indvisuals){
        manyroomserror.style.display = "block";        
        counter--;      
    }
    if(Excpectedminindvisual < indvisuals){
        capacityerror.style.display = "block";        
        counter--;      
    }
    if(thedate ==  ""){
        bookingerror9.style.display = "block";        
        counter--;      
    }
    if(counter == 9 ){
        successbooking.style.display = "block";        
    }
}