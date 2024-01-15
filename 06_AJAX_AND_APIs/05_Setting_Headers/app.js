const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } } // this is not standard for every API, it is used here to make the API return a JSON instead of html
        const res = await axios.get('https://icanhazdadjoke.com/', config); // acxios.get retuens a promise so we can await
        return res.data.joke;
    } catch (e) {
        return "no jokes available :(";
    }
}

const addDadJoke = async () => {
    try {
        const jokeText = await getDadJoke();
        const newLi = document.createElement('LI');
        newLi.append(jokeText);
        jokes.append(newLi);
    } catch (e) {
        console.log("ERROR", e);
    }
}

button.addEventListener('click', addDadJoke);

