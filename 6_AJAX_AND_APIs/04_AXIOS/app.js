// AXIOS
// A library for making HTTP requests
// Axios return Promises

// the difference between axios and fetch is that we do not have to actually parse that JSON data since it is autmoatically parsed

// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESPONSE:", res);
//     })
//     .catch(e => {
//         console.log("ERROR", e);
//     });

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR", e);
    }
}

getStarWarsPerson(12);