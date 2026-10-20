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