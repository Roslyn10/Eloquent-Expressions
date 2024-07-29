// Defines the category of the quotes
const category = 'Success';
// API key authentication
const apiKey = 'ipf6Izv5ye4EMjIEai8x5w==aDkza9dtDhfsu3cN';
// URL for the API request to fetch the quotes
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

// Declare a global variable to store the current quote
let currentQuote = {};

// Function to fetch a new quote from the API
async function fetchQuote() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        currentQuote = data[0]; // Store the current quote
        document.getElementById('quote-text').textContent = currentQuote.quote;
        document.getElementById('quote-author').textContent = `— ${currentQuote.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote-text').textContent = 'Error fetching quote';
        document.getElementById('quote-author').textContent = '';
    }
}

function tweet() {
    if (currentQuote && currentQuote.quote) {
        const tweetText = encodeURIComponent(`${currentQuote.quote} — ${currentQuote.author}`);
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, "Tweet Window", "width=600, height=300");
    } else {
        alert('No quote to tweet.');
    }
}

// Fetch a quote when the page loads
fetchQuote();
