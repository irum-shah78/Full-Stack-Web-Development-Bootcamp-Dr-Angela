// For loop
// used when we try to iterate
var result = []
function FizzBuzz() {
    for (var count = 1; count < 101; count++) {
        if (count % 3 == 0 && count % 5 == 0) {
            result.push("FizzBuzz");
        } else if (count % 3 == 0) {
            result.push("Fizz");
        } else if (count % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(count);
        }
    }
    console.log(result);
}
FizzBuzz();

// While Loop
// use while loop when we have any state, essentially when something is true.
function beer() {
    let bottles = 99;
    while (bottles > 0) {
        console.log(
            `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\n` +
            `Take one down, pass it around, ${--bottles} bottles of beer on the wall.\n`
        );
    }
    if (bottles == 0) {
        console.log('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more.')
    }
}
beer();

// HIGH ORDER FUNCTION CHALLENEGE
// A function that contains the function as an Input called the High Order Function. Able to take functions as inputs.
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// Constructor Function
// function that is used as a blueprint to create and initialize multiple similar objects.
// the first letter of the function must be capitalized to indicate that it is a constructor function.
// if we want to call a method in the object, we can add the anonymous function to the constructor function.

// var bellBoyOne = new BellBoy("Jimmy", 25, ["French", "English"]);
// var houseKeeperOne = {
//     name: "Maria",
//     age: 25,
//     yearsOfExperience: 5,
//     cleaningRepertoire: ["Lobby", "Rooms", "Bathrooms"]
// }

function HouseKeeper(name, age, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaningWork = function () {
        alert("Cleaning in progress..");
    }
}
var houseKeeperTwo = new HouseKeeper("Maria", 25, 5, ["Lobby", "Rooms", "Bathrooms"]);
var houseKeeperThree = new HouseKeeper("John", 30, 10, ["Rooms", "Kitchens"]);


// Callback function allows us to wait to something finish happeening. have events and then call those events back.
function anotherEventListener(typeOfEvent, callback) {

    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        duartionOfKeypress: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

anotherEventListener("keypress", function(event){
    console.log(event);
})