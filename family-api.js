#!/usr/bin/env node

// Defines the category of the quotes
const category = 'family';
// Api key for the authentication
const apiKey = 'd97Vl9ai59G0CQt6ODYM3w==ELhxxIArkdOWGUQZ';
// URL for the API request to fetch the qoutes
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

//  Function to fetch a new quote from the API
async function fetchQuote() {
    try {
        // Makes a request to the API
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey // Includes the API key in the request
            }
        });
        // Check if the response is ok (staus code 200-209)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON data from the response
        const data = await response.json();
        // Get the first quote from the data
        const quote = data[0];
        // Update the quote text and author on the page
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

// Fetch a quote when the page loads 
fetchQuote();