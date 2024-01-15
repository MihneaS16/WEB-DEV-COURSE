//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// AJAX - intro (ASYNCHRONOUS JAVASCRIPT AND XML)
// creating applications, where using javascript we can load data or fetch infromation or send data somewhere (to a database)

// APIs - intro
// API = application programming interface
// Web API = interfaces that are http-based, they are like a portal to a different application or a database or something else
// Endpoints: Endpoints are the locations of the resources, and the API uses endpoint URLs to retrieve the requested resources.

// JSON - Java Script Object Notation
// based on javascript objects
// each key has to be a double-quoted string

// this is how to extract data from a JSON
const data = `{"base":"BTC", "target": "USD", "price": "11288.4981"}`;
const parsedData = JSON.parse(data);
console.log(parsedData.price);

// this is how to convert an object to JSON
const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}
// it removes the owner because it is set as undefined
const dogString = JSON.stringify(dog);
console.log(dogString);


// HTTP Verbs
// there are different types of requests
// most free-to-use APIs will only allow GET requests, which are used for getting stuff from an API


// HTTP Status Codes - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// a code that comes back in an HTTP response that means something
// Examples: 200 (or anything starting with a 2) - everything goes OK,  400 (or anything starting with a 4) - client error responses, 500 - server error, etc.


// Query Strings
// ?sort=desc&color=blue - unlike a URL, we can append anything we want using a query string and it will always be ignored by a given website, server, api unless it
// is specifically looking for one of those things
// example: https://developer.mozilla.org/en-US/search?q=chicken, ?q=chicken is searching for chicken keyword
// a lot of APIs are structured in a way that they want you to provide values via a query string
// we can add this to any URL we want (most of the time it will be ignored)


// HTTP Headers
// key-value pairs that go along with a request
// go to https://github.com/ -> inspect -> network -> refresh -> github.com -> headers
// some APIs are set up in a way that we have to send custom headers along with your request