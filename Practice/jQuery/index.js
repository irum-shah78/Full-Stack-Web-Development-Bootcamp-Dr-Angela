// we use this document ready function when cdn or jquery is used in the head tag of html file
// $(document).ready(function () {
//     $("h1").css("color", "red");
// });

// Manipulate Styles - do css things and also can log the things in the console
// $("h1").css("color", "green");
// console.log($("h1").css("color"));

// we can style things in style.css file but then we can "add and remove" the classes here as well
$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// Manipulate Text - we can check that element has a class or not
console.log($("h1").hasClass("margin-50"));

// we can change the text of the element
$("h1").text("Byee");

// we can change the html of the element
$("button").html("<em>Don't Click Mee</em>");

// Manipulate Attributes - we can change the attributes of the element
// get attribute
console.log($("img").attr("src"));

// set attribute
$("a").attr("href", "https://www.yahoo.com");

// class is the attribute as well so:
console.log($("h1").attr("class"));

// Event Listeners - we can add event listeners to the elements
// $("h1").click(function () {
//     $("h1").css("color", "purple");
// });

// if its vanillajs then its like this to change the color of h1 when button clicked:
// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "purple";
//     })
// }

// now in jquery we can use "click"
$("button").click(function () {
    $("h1").css("color", "purple");
})

// we can also bind "keydown event"
$("input").keydown(function (event) {
    console.log(event.key);
    $("h1").text(event.key);
});

// use regex if you want to show few keys only
// $("input").keydown(function (event){
//     if(/^[a-zA-Z0-9]$/.test(event.key)){
//         $("h1").text(event.key);
//     }
// })

// there is actually more flexible method of it as w evan us "on event" and it takes two events as parameters.
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
})

// add elements - before, after, prepend(add the elements just after the openeing tag of the element you sleceted to add), append(add the elements just before the closing tag of the element you sleceted to add)
$("h1").before("<button>New Button</button>");
$("h1").after("<button>New Button</button>");
$("h1").prepend("<button>New Button</button>");
$("h1").append("<button>New Button</button>");

// remove the elements
// $("button").remove();

// Animations(all the methods come with "toggle" as well)
// hide and show for once - toggle for multiple times
// $("button").on("click", function () {
//     $("h1").hide();
//     // $("h1").show();
//     // $("h1").toggle();
// })

// fadeIn and fadeOut - to smoothly hide and show the elements, fadeToggle - to smoothly hide and show the elements on one button click
// $("button").on("click", function () {
//     $("h1").fadeOut();
//     // $("h1").fadeIn();
//     // $("h1").fadeToggle();
// })

// slideUp and slideDown - collapse and expand the elements, slideToggle - to do slideUp and slideDown of both(useful for dropdowns)
// $("button").on("click", function () {
//     // $("h1").slideUp();
//     // $("h1").slideDown();
//     $("h1").slideToggle();
// })

// if we want to control the animations and not to use these default methods then we can use "animate" method and pass the css properties as parameters
// inside the animate method we can only use the css properties which have numeric values like opacity, height, width, etc. but not color, background-color, etc.
// $("button").on("click", function () {
//     $("h1").animate({ opacity: 0.5 });
// });

// for multiple animations at the same time we can do something like this:
$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.3 });
})