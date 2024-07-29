#!/usr/bin/env node

// Defines the category of the quotes
const category = 'Health';
// API key for the authentication
const apiKey = 'Jnfv5j/HghjhDtRkbTzY3A==hGVTan9WvBtclTMQ';
// URL for the API request to fetch the quotes
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

// Function to  fetch a new quote from the API
async function fetchQuote() {
    try {
        // Make a request to the API
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey // Includes the API key in the requests
            }
        });
        // Check if the responses is ok (status code 200-209)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON data from the response
        const data = await response.json();
        // Get the first quote from the data
        const quote = data[0];
        // Update the quote text and the author on the page
        document.getElementById('quote-text').textContent = quote.quote;
        document.getElementById('quote-author').textContent = `— ${quote.author}`;
    } catch (error) {
        // Handle errors
        console.error('Error fetching quote:', error);
        // Displays error messages on the page 
        document.getElementById('quote-text').textContent = 'Error fetching quote';
        document.getElementById('quote-author').textContent = '';
    }
}

//Function to tweet favourite quotes
function tweet() {
    if (currentQuote && currentQuote.quote) {
        const tweetText = encodeURIComponent(`${currentQuote.quote} — ${currentQuote.author}`);
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, "Tweet Window", "width=600, height=300");
    } else {
        alert('No quote to tweet.');
    }
}

// Fetch a quote when the page loadss
fetchQuote();