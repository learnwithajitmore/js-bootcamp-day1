const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
let i = 0;

function changeName() {
    document.getElementById("current_name").innerText = names[0];
}

function next(){
    if(i==names.length-1) i = 0;
    else i = i + 1;

    document.getElementById("current_name").innerText = names[i];
}

function previous(){
    if(i==0) i = names.length - 1;
    else i = i - 1;
    document.getElementById("current_name").innerText = names[i];
}