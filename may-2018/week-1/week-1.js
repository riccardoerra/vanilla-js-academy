// DOM BASICS

// Getting elements in the DOM

// Getting all matching elements

// Get all elements with the .bg-red class
var elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
var elemsSnacks = document.querySelectorAll('[data-snack]');

// Getting the first matching element

// The first div
var elem = document.querySelector('div');

// The first div with the .bg-red class
var elemRed = document.querySelector('.bg-red');

// The first div with a data attribute of snack equal to carrots
var elemCarrots = document.querySelector('[data-snack="carrots"]');

// An element that doesn't exist
var elemNone = document.querySelector('.bg-orange');

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



// Listening for events in the DOM

// Listening for events

var btn = document.querySelector('#click-me');
btn.addEventListener('click', function (event) {
    console.log(event); // The event details
    console.log(event.target); // The clicked element
}, false);

// Multiple Targets

// This won't work!

var btns = document.querySelectorAll('.click-me');

btns.addEventListener('click', function (event) {
    console.log(event); // The event details
    console.log(event.target); // The clicked element
}, false);

// This won't work either!

var btns = document.querySelectorAll('.click-me');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
        console.log(event); // The event details
        console.log(event.target); // The clicked element
    }, false);
}

// Listen for clicks on the entire window
window.addEventListener('click', function (event) {

    // If the clicked element has the `.click-me` class, it's a match!
    if (event.target.classList.contains('click-me')) {
        // Do something...
    }

}, false);

// Use Capture

// Listen for all focus events in the document
document.addEventListener('focus', function (event) {
    // Run functions whenever an element in the document comes into focus
}, true);



// Get, set, and check for attributes

// Attribute Methods

var elem = document.querySelector( '#some-elem' );

// Get the value of an attribute
var sandwich = elem.getAttribute( 'data-sandwich' );

// Set an attribute value
elem.setAttribute( 'data-sandwich', 'turkey' );

// Remove an attribute
elem.removeAttribute( 'data-sandwich' );

// Check if an element has an attribute
if ( elem.hasAttribute( 'data-sandwich' ) ) {
    // do something...
}

// Attribute Properties

var elem = document.querySelector( '#some-elem' );

// Get attributes
var id = elem.id;
var name = elem.name;
var tabindex = elem.tabindex;

// Set attributes
elem.id = 'new-id';
elem.title = 'The title for this thing is awesome!';
elem.tabIndex = '-1';

// Remove attributes
elem.id = '';
elem.title = '';
elem.name = '';



// Converting strings to numbers

// Convert a string to a whole number (or integer)

var text = '42px';
var integer = parseInt(text, 10);
// returns 42

// Convert a string to a number with a decimal (or a float)

var text = '3.14someRandomStuff';
var pointNum = parseFloat(text);
// returns 3.14

// Round Numbers

Math.floor(5.5); // returns 5
Math.ceil(5.5); // returns 6
Math.ceil(5.4); // returns 6
Math.round(5.4); // return 5
Math.round(5.5); // return 6



// Example Project

// Say hello!

// <form id="say-hi">
//     <label for="name">What's your name?</label>
//     <input type="input" id="name">
//     <button>Say Hi</button>
// </form>

// Planning out our script

// Writing the JavaScript

// Listen for form submissions
document.addEventListener('submit', function (event) {

    // If the form is our say hi form
    if (event.target.id === 'say-hi') {

        // Prevent the form from submitting
        event.preventDefault();

        // Get the name field from the form
        var name = event.target.querySelector('#name');

        // Alert "Hello" with the person's name
        alert('Hello, ' + name.value + '!');

    }
}, false);

// https://jsfiddle.net/cferdinandi/03576xnz/