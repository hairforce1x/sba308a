const apiUrl = "https://v2.jokeapi.dev/joke/any"
const displaySetup = document.getElementById("joke-setup");
const displayDelivery = document.getElementById("joke-delivery");
const savedJokes = document.getElementById("saved-jokes");
const reqButton = document.getElementById("request-btn");
const saveButton = document.getElementById("save-btn");
let jokesArray = [];


async function getJoke() { // fetches random joke
    try {
        const response = await fetch(apiUrl);
        const joke = await response.json();
        // console.log(joke)
        if (joke.type === 'single') {
            displaySetup.textContent = `${joke.joke}`;
            jokesArray.push(joke);
        } else {
            displaySetup.textContent = `${joke.setup}`;
            displayDelivery.textContent = `${joke.delivery}`;
            jokesArray.push(joke);
        }
        console.log(jokesArray)
    } catch (error) {
        console.log(error)
    }
}


reqButton.addEventListener("click", handleClick);

function handleClick(){
    getJoke()
}

saveButton.addEventListener("click", saveClick);

function saveClick(){
    console.log(jokesArray)
}