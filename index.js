btns = document.querySelectorAll("button");

btns.forEach(element => {
    element.addEventListener('click', function () {
        playButton(element.innerHTML);
        addPressed(element);
    });
});

document.addEventListener('keypress', function(event) {
    playButton(event.key);
    let pressedKey = document.querySelector("."+event.key);
    addPressed(pressedKey);
});

function addPressed(element) {

    element.classList.add("pressed");

    setTimeout(function () {
        element.classList.remove("pressed");
    },200);

}

function playButton(key) {

    switch (key) {

        case "w":
            var tom1Audio = new Audio("./sounds/tom-1.mp3");
            tom1Audio.play();
            break;

        case "a":
            var kickAudio = new Audio("./sounds/kick-bass.mp3");
            kickAudio.play();
            break;

        case "s":
            var tom4Audio = new Audio("./sounds/tom-4.mp3");
            tom4Audio.play();
            break;

        case "d":
            var crashAudio = new Audio("./sounds/crash.mp3");
            crashAudio.play();
            break;

        case "j":
            var snareAudio = new Audio("./sounds/snare.mp3");
            snareAudio.play();
            break;

        case "k":
            var tom2Audio = new Audio("./sounds/tom-4.mp3");
            tom2Audio.play();
            break;

        case "l":
            var tom3Audio = new Audio("./sounds/tom-3.mp3");
            tom3Audio.play();
            break;

    }
}