const apiUrl = "https://v2.jokeapi.dev/joke/any"
const displaySetup = document.getElementById("joke-setup");
const displayDelivery = document.getElementById("joke-delivery");

async function getJoke() { // fetches random joke
    try {
        const response = await fetch(apiUrl);
        const joke = await response.json();
        console.log(joke)
        if (joke.type === 'single') {
            displaySetup.textContent = `${joke.joke}`;
        } else {
            displaySetup.textContent = `${joke.setup}`;
            displayDelivery.textContent = `${joke.delivery}`;
        }
    } catch (error) {
        console.log(error)
    }
}
getJoke()