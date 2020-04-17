var header = document.getElementById("mainHeader");

function avengerZone() {
    confirm("You are about to enter the avenger's zone");
}

function totalFilms() {
    var total = 23;
    var guess = 0;

    while (guess !== total) {
        guess = parseInt(prompt("How many MCU (marvel cinematic universe) are there in total?"));

        if (guess < total) {
            alert("Nope! Too Low.");

        } else if (guess > total) {
            alert("Nope! Too High.");
        }
    }
    alert("You are correct!");
}

function strongestAvenger() {
    var avenger = prompt("Who is the strongest avenger?\n" +
        "Thor\n" +
        "Iron Man\n" +
        "Hulk\n" +
        "Spider-Man\n" +
        "Captain America").toLowerCase();
    if (avenger == "iron man" || avenger == "ironman") {
        alert("You are correct.");

    } else if (avenger == "hawkeye") {
        alert("He is the weakest...");

    } else if (avenger == "thor") {
        header.style.backgroundImage =
            "url(https://pbs.twimg.com/media/D1qIO0KWkAE4NVY.jpg)";
        document.getElementById("quote").innerHTML = document
            .getElementById("quote")
            .innerHTML.replace("I am Iron Man", "He's a friend, from work!");

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
        document.getElementById("quote").innerHTML = document
            .getElementById("quote")
            .innerHTML.replace(
                "I am Iron Man",
                "With great power, comes great responsibility."
            );

    } else if (avenger === "hulk") {
        header.style.backgroundImage = "url(https://66.media.tumblr.com/fa85e96169ba1fe1abaa31ade9f76bf8/tumblr_pt038qYSaA1svefph_1280.jpg)";
        document.getElementById("quote").innerHTML = document.getElementById("quote").innerHTML.replace("I am Iron Man", "Hulk SMASH!");
    } else {
        alert("WRONG");
    }
}

avengerZone();
totalFilms();
strongestAvenger();