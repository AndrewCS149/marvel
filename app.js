/**
 * A simple function to display a confirm box. 
 */
function avengerZone() {

    confirm("You are about to enter the Avenger zone");
}

/**
 * A function to display an alert box asking the user to enter how many MCU (marvel
 * cinematic universe) films there are in total (23). The correct answer must be inputted 
 * to move forward. The prompt will give hints if the incorrect answer is too low or 
 * too high. 
 */
function totalFilms() {

    var total = 23;
    var guess = 0;

    while (guess !== total) {
        guess = parseInt(prompt("How many MCU (marvel cinematic universe) films are there in total?"));

        if (guess < total) {
            alert("Nope! Too Low.");

        } else if (guess > total) {
            alert("Nope! Too High.");
        }
    }
    alert("You are correct!");
}

/**
 * A function to first display a prompt with different options. Whichever option the 
 * the user to inputs, a related header background-image will be displayed. If 'iron man' 
 * or something other than the other choices are selected, the default iron man background-image
 * is displayed. 
 */
function strongestAvenger() {
    0
    var header = document.getElementById("mainHeader");
    var avenger = prompt("Who is the strongest avenger?\n" +
        "Thor\n" +
        "Iron Man\n" +
        "Hulk\n" +
        "Spider-Man\n" +
        "Captain America").toLowerCase();

    if (avenger === "iron man" || avenger === "ironman") {
        alert("You are correct.");

    } else if (avenger === "thor") {
        header.style.backgroundImage =
            "url(https://pbs.twimg.com/media/D1qIO0KWkAE4NVY.jpg)";
        document.getElementById("quote").innerHTML = document
            .getElementById("quote")
            .innerHTML.replace("I am Iron Man", "He's a friend, from work!");

    } else if (avenger === "loki") {
        header.style.backgroundImage =
            "url(https://coverfiles.alphacoders.com/465/46591.jpg)";

    } else if (
        avenger === "spiderman" ||
        avenger === "spider man" ||
        avenger === "spider-man"
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
        header.style.backgroundImage =
            "url(https://66.media.tumblr.com/fa85e96169ba1fe1abaa31ade9f76bf8/tumblr_pt038qYSaA1svefph_1280.jpg)";
        document.getElementById("quote").innerHTML = document
            .getElementById("quote")
            .innerHTML.replace(
                "I am Iron Man", "Hulk SMASH!");

    } else if (avenger === "captain america") {
        header.style.backgroundImage =
            "url(https://i.pinimg.com/originals/7d/59/85/7d5985ed440d11cc5ec3b7741881e316.jpg)";
        document.getElementById("quote").innerHTML = document
            .getElementById("quote")
            .innerHTML.replace(
                "I am Iron Man", "I can do this all day.");
    } else {
        alert("WRONG");
    }
}



avengerZone();
totalFilms();
strongestAvenger();