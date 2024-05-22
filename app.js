document.getElementById('jokeButton').addEventListener('click', getJoke);

async function getJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        
        document.getElementById('jokeSetup').innerText = data.setup;
        document.getElementById('jokePunchline').innerText = data.punchline;
    } catch (error) {
        document.getElementById('jokeSetup').innerText = 'Oops! Something went wrong.';
        document.getElementById('jokePunchline').innerText = '';
    }
}
