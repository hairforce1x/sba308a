function saveClick() {
    const savedJokes = document.getElementById("saved-jokes");
    const newOption = document.createElement("option"); // Doesn't work for one-liners
    newOption.textContent = `${currentJoke.setup}`;
    newOption.value = currentJoke.delivery;

    savedJokes.appendChild(newOption);
    console.log(savedJokes);
}
async function getJoke1() { // fetches random joke
    try {
        const response = await fetch(apiUrl);
        const joke = await response.json();
        currentJoke = joke;
        // jokesArray.push(currentJoke);
        // console.log(jokesArray);
        // displayJoke()
        console.log("Module: "+currentJoke);
    } catch (error) {
        console.log(error)
    }
}
export { saveClick };