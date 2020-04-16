confirm("You are about to enter the avenger's zone")

var avenger = prompt("Who is the strongest avenger?");

avenger = avenger.toLowerCase();

if (avenger == "iron man" || avenger == "ironman") {
    alert("You are correct.");
} else {
    alert("WRONG");
}