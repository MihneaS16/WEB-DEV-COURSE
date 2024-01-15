// Fetch - the newer and improved improved way of making request
// supports promises

// const url = "https://swapi.dev/api/people/1/";

// fetch(url) // sends a request to the url and returns a Promise
//     .then(res => { // if the promise is resolved
//         console.log("RESOLVED!", res);
//         return res.json(); // the response had an incomplete body, so we need to call res.json(), which returns a Promise of its own
//     })
//     .then(data => { // we handle the Promise received from res.json()
//         console.log("JSON DONE", data);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then(res => {
//         console.log("SECOND REQUEST RESOLVED", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("JSON 2 DONE", data);
//     })
//     .catch(error => {
//         console.log("ERROR!", e);
//     });

// usually, its better to make the requests independently, but in some cases it is necessary to do it like this ^^^


const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!", e);
    }

}

loadStarWarsPeople();

