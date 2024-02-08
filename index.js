// code your solution here


//Function declaration

razzle("Monika", "the kids")
function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`)
}

//razzle()

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()

//Function expression is wrapped in ()
(function () {
    console.log("Yet more razzling");
  });


// Anonymous Function
/*
function() {
    console.log(`Yet more razzling`)
}
*/
//example

const button = document.getElementById("button");
button.addEventListener('click', function () {
    console.log(`Yet more razzling`);
});

// Define a Function using a Function Expresion

const fn = function () {
    console.log(`Yet more potatos`);
}  

fn;
fn();

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}


//IIFE

(function (baseNumber) {
    return baseNumber + 3;
})(5)

function wrapAdjective (input) {
   return function (adjective = "special") {
        return `You are ${input}${adjective}${input}!`
   }
}