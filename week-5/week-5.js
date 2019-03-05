// BROWSER STORAGE

// localStorage and sessionStorage

// localStorage
var someData = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', someData);
// Store data

var data = localStorage.getItem('myDataKey');
// Get data

localStorage.removeItem('myDatakey');
// Remove data


var lunch = {
  sandwich: 'turkey',
  chips: 'Cape Cod',
  drink: 'Pepsi'
};

localStorage.setItem('lunchOrder', lunch);
// Save lunch to localStorage

localStorage.getItem('lunchOrder');
// Get lunch
// returns "[object Object]"

// sessionStorage
var someTempData = 'The data that I want to store temporarily.';
sessionStorage.setItem('myTempDataKey', someTempData);
// Store data

var tempData = sessionStorage.getItem('myTempDataKey');
// Get data

sessionStorage.removeItem('myTempDatakey');
// Remove data

// Storing arrays and objects

// Objects
var lunch = {
  sandwich: 'turkey',
  chips: 'Cape Cod',
  drink: 'Pepsi'
}

localStorage.setItem('lunchOrder', JSON.stringify(lunch));
// Save data

var data = JSON.parse(localStorage.getItem('lunchOrder'));
// Get data


var data = localStorage.getItem('lunchOrder');
// Get data

if (data) {
  data = JSON.parse(data);
}
// If there's data, convert it back to an object

// Arrays
var sandwiches = ['turkey', 'tuna', 'pb&j'];

localStorage.setItem('sandwiches', sandwiches.toString());
// Save data

var data = localStorage.getItem('sandwiches').split(',');
// Get data


var sandwiches = ['turkey', 'tuna', 'pb&j'];

localStorage.setItem('sandwiches', JSON.stringify(sandwiches));
// Save data

var data = JSON.parse(localStorage.getItem('sandwiches'));
// Get data






