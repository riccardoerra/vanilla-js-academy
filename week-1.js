// VANILLA JS ACADEMY

// WEEK 1: DOM Basics

// Getting elements in the DOM

// document.querySelectorAll()

// Get all elements with the .bg-red class
var elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
var elemsSnacks = document.querySelectorAll('[data-snack]');



// document.querySelector()

// The first div
var elem = document.querySelector('div');

// The first div with the .bg-red class
var elemRed = document.querySelector('.bg-red');

// The first div with a data attribute of snack equal to carrots
var elemCarrots = document.querySelector('[data-snack="carrots"]');

// An element that doesn't exist
var elemNone = document.querySelector('.bg-orange');



// If an element isn’t found, querySelector() returns null.

// Verify element exists before doing anything with it
if (elemNone) {
    // Do something...
}

// Looping through items

// for loops

var sandwiches = [
    'tuna',
    'ham',
    'turkey',
    'pb&j'
];

for (var i = 0; i < sandwiches.length; i++) {
    console.log(i) // index
    console.log(sandwiches[i]) // value
}

// returns 0, tuna, 1, ham, 2, turkey, 3, pb&j



// Multiple loops on a page

for (var n = 0; n < sandwiches.length; n++) {
    // Do stuff...
}

// Or...
var i;
for (i = 0; i < sandwiches.length; i++) {
    // Do stuff...
}



// for...in

var lunch = {
    sandwich: 'ham',
    snack: 'chips',
    drink: 'soda',
    desert: 'cookie',
    guests: 3,
    alcohol: false,
};

for (var key in lunch) {
    if (lunch.hasOwnProperty(key)) {
        console.log(key); // key
        console.log(lunch[key]); // value
    }
}

// returns sandwich, ham, snack, chips, drink, soda, desert, cookie, guests, 3, alcohol, false



// Array.forEach()

var sandwiches = [
    'tuna',
    'ham',
    'turkey',
    'pb&j'
];

sandwiches.forEach(function (sandwich, index) {
    console.log(index) // index
    console.log(sandwich) // value
});

// returns 0, tuna, 1, ham, 2, turkey, 3, pb&j



// Looping over NodeLists

Array.from(document.querySelectorAll('.some-selector')).forEach(function (item, index) {
    // Do something...
});