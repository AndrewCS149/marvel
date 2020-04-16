var header = document.getElementById("mainHeader");

function avengerZone() {
  confirm("You are about to enter the avenger's zone");
}

function strongestAvenger() {
  var avenger = prompt("Who is the strongest avenger?").toLowerCase();

  if (avenger == "iron man" || avenger == "ironman") {
    alert("You are correct.");
  } else if (avenger == "hawkeye") {
    alert("He is the weakest...");
  } else if (avenger == "thor") {
    header.style.backgroundImage =
      "url(https://pbs.twimg.com/media/D1qIO0KWkAE4NVY.jpg)";
  } else if (avenger == "loki") {
    header.style.backgroundImage =
      "url(https://coverfiles.alphacoders.com/465/46591.jpg)";
  } else if (
    avenger == "spiderman" ||
    avenger == "spider man" ||
    avenger == "spider-man"
  ) {
    header.style.backgroundImage =
      "url(https://data.whicdn.com/images/333714008/original.jpg)";
  } else {
    alert("WRONG");
  }
}

avengerZone();
strongestAvenger();
