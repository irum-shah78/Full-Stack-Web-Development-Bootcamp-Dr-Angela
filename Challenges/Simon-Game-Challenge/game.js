// alert("hiiii!!!");

$(document).ready(function () {
    var userClickedPattern = [];
    var gamePattern = [];
    var buttonColours = ["red", "blue", "green", "yellow"];

    function nextSequence() {
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        console.log(randomChosenColour);
        gamePattern.push(randomChosenColour);
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
        // audio.play();
        playSound(randomChosenColour);
    }
    // nextSequence();
    $(document).keydown(function () {
        nextSequence();
    });

    $(".btn").click(function () {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        playSound(userChosenColour);
        animatePress(userChosenColour);
    });

    function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

    function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");
        setTimeout(() => {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
    }
});
