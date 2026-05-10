function searchfunc(){
    let cardscount = 9;
    let counter = 0;
    let roomnames = document.getElementsByClassName("roomnames");
    let cards = document.getElementsByClassName("cards");
    let search = document.getElementById("search").value.toLowerCase();
    let nothing = document.getElementById("notfound");
    for(let x = 0 ; x < cardscount ; x++){
        if( !(roomnames[x].innerText.toLowerCase().includes(search) ) ){
            cards[x].style.display = "none";
            counter++;
        }else{
            cards[x].style.display = "block";
        }
        if(counter == cardscount){
            nothing.style.display = "block";
        }else{
            nothing.style.display = "none";
        }
    }
}
