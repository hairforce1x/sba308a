const apiUrl = "https://v2.jokeapi.dev/joke/any"


async function getJoke(){ // fetches random joke
    try {
        const response = await fetch(apiUrl);
        const joke = await response.json();
    } catch (error) {
        console.log(error)
    }
}
fetchJoke();