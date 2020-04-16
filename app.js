function avengerZone() {
  confirm("You are about to enter the avenger's zone");
}

function strongestAvenger() {
  var avenger = prompt("Who is the strongest avenger?").toLowerCase();
  if (avenger == "iron man" || avenger == "ironman") {
    alert("You are correct.");
  } else if (avenger == "hawkeye") {
    alert("He is the weakest...");
  } else {
    alert("WRONG");
  }
}

avengerZone();
strongestAvenger();
