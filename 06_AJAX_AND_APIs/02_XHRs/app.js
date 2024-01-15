// XMLHttpRequest
// the original way of sending requests via JS
// there is no support for promises

// NOT AT ALL IMPORTANT TO REMEMBER

const url = "https://swapi.dev/api/people/1/";
const request = new XMLHttpRequest();

request.onload = function () {
    // this will run when there is no error
    console.log("IT LOADED");
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.name);
}

request.onerror = function () {
    // this will run when there is an error
    console.log("ERROR");
    console.log(this);
}

request.open("GET", url);
request.send();
