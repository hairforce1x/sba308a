const apiUrl = "https://v2.jokeapi.dev/joke/any"
const displaySetup = document.getElementById("joke-setup");
const displayDelivery = document.getElementById("joke-delivery");
const savedJokes = document.getElementById("saved-jokes");
const reqButton = document.getElementById("request-btn");
const saveButton = document.getElementById("save-btn");
let jokesArray = [];
let currentJoke;

async function getJoke() { // fetches random joke
    try {
        const response = await fetch(apiUrl);
        const joke = await response.json();
        currentJoke = joke;
        jokesArray.push(currentJoke);
        // console.log(jokesArray);
        displayJoke()
        // console.log(currentJoke);
    } catch (error) {
        console.log(error)
    }
}
function displayJoke() {
    if (currentJoke.type === 'single') {
        displaySetup.textContent = `${currentJoke.joke}`;
    } else {
        displaySetup.textContent = `${currentJoke.setup}`;
        displayDelivery.textContent = `${currentJoke.delivery}`;
    }
}
reqButton.addEventListener("click", handleClick);

async function handleClick() {
    getJoke()
    await console.log(jokesArray);
}

saveButton.addEventListener("click", saveClick);

function saveClick() {
    const savedJokes = document.getElementById("saved-jokes");
    const newOption = document.createElement("option");
    console.log(currentJoke.setup)
    newOption.textContent = `${currentJoke.setup}`

    savedJokes.appendChild(newOption)
    console.log(savedJokes)
}