// APIS AND JAVASCRIPT

// AJAX

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // What do when the request is successful
    console.log('success!', xhr);
  } else {
    // What do when the request fails
    console.log('The request failed!');
  }

  // Code that should run regardless of the request status
  console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

// HTTP Methods
// The four most common are GET, POST, PUT, and DELETE

// Sending data to an API

// Working with XHR Response Data

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // Runs when the request is successful
    console.log(xhr.responseText);
  } else {
    // Runs when it's not
    console.log(xhr.responseText);
  }

};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

// Converting xhr.responseText from a string to an object
// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // Runs when the request is successful
    console.log(JSON.parse(xhr.responseText));
  } else {
    // Runs when it's not
    console.log(JSON.parse(xhr.responseText));
  }

};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

// An XHR Helper Function

var makeRequest = function (url, method, success, failure, always) {

  // Make sure a URL and method were provided
  if (!url || !method) return;

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();

  // Setup our listener to process completed requests
  xhr.onload = function () {

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // Run the success callback
      if (success && typeof success === 'function') {
        success(JSON.parse(xhr.responseText), xhr);
      }
    } else {
      // Run the failure callback
      if (failure && typeof failure === 'function') {
        failure(xhr);
      }
    }

    if (always && typeof always === 'function') {
      always(JSON.parse(xhr.responseText), xhr);
    }

  };

  // Create and send a request
  // Defaults to GET
  xhr.open(method, url);
  xhr.send();

};

// Get a list of posts
makeRequest('https://jsonplaceholder.typicode.com/posts', 'GET', function (posts) {
  posts.forEach(function (post) {
    console.log(post);
  });
});

// Update post number 4
// Log on success
makeRequest('https://jsonplaceholder.typicode.com/post/4', 'PUT', function (data) {
  // Log on success
  console.log(data);
});

// Delete post number 4
// Log on delete
makeRequest('https://jsonplaceholder.typicode.com/post/4', 'DELETE', null, function (data, xhr) {
  // Log on failure
  console.log(xhr);
});

// Injecting HTML into the DOM

// Getting and setting HTML
var elem = document.querySelector('#some-elem');

// Get HTML content
var html = elem.innerHTML;

// Set HTML content
elem.innerHTML = 'We can dynamically change the HTML. We can even include HTML elements like <a href="#">this link</a>.';

// Add HTML to the end of an element's existing content
elem.innerHTML += ' Add this after what is already there.';

// Add HTML to the beginning of an element's existing content
elem.innerHTML = 'We can add this to the beginning. ' + elem.innerHTML;

// You can inject entire elements into other ones, too
elem.innerHTML += '<p>A new paragraph</p>';

// Getting and setting text
var elem = document.querySelector('#some-elem');

// Get text content
var text = elem.textContent;

// Set text content
elem.textContent = 'We can dynamically change the content.';

// Add text to the end of an element's existing content
elem.textContent += ' Add this after what is already there.';

// Add text to the beginning of an element's existing content
elem.textContent = 'We can add this to the beginning. ' + elem.textContent;

// Creating HTML elements
var div = document.createElement('div');
var link = document.createElement('a');
var article = document.createElement('article');

var chicken = document.createElement('chicken'); // <chicken></chicken>
var placeholder = document.createElement('_'); // <_></_>

var div = document.createElement('div');
div.className = 'new-div';
div.id = 'new-div';
div.setAttribute('data-div', 'new');
div.style.color = '#fff';
div.style.backgroundColor = 'rebeccapurple';

// Injecting an HTML element into the DOM
// Create a new HTML element and add some text
var div = document.createElement('div');
div.textContent = 'Nice work, dude!';

// Get the element to add your new HTML element before, after, or within
var target = document.querySelector('#app');

// Inject the `div` element before the `#app` element
target.before(div);

// Inject the `div` element after the `#app` element
target.after(div);

// Inject the `div` element before the first item *inside* the `#app` element
target.prepend(div);

// Inject the `div` element after the first item *inside* the `#app` element
target.append(div);