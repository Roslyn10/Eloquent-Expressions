#!/usr/bin/env node

// Defines the category of the quotes 
const category = 'Happiness';
// Api key for the authentication
const apiKey = 'ZB9K79SIyYGChzuwC06Raw==Vu3VZB5EoPtduHN5';
// URL for the API request to fetch the quotes
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

// Function to fetch a new quote from the API
async function fetchQuote() {
    try {
        // Fetch the quote from the API using, the proivuded URL and API Key
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        // Checks is the response is not okay (status code outside the range 200-209 )
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON  data from the response 
        const data = await response.json();
        currentQuote = data[0]; // Store the current quote
        // Udpdate the DOM with the fetched quote and author 
        document.getElementById('quote-text').textContent = currentQuote.quote;
        document.getElementById('quote-author').textContent = `— ${currentQuote.author}`;
    } catch (error) {
        // Log any errors that occur during the fetch 
        console.error('Error fetching quote:', error);
        // Updates the domain to show an error message 
        document.getElementById('quote-text').textContent = 'Error fetching quote';
        document.getElementById('quote-author').textContent = '';
    }
}

//Function to tweet favourite quotes
function tweet() {
    // Checks if there is a current quote to tweet
    if (currentQuote && currentQuote.quote) {
        // Encodes the quote and author for use in a URL
        const tweetText = encodeURIComponent(`${currentQuote.quote} — ${currentQuote.author}`);
        // Opens a new window to tweet the quote 
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, "Tweet Window", "width=600, height=300");
    } else {
        // Alert the user if there is no quote to tweet 
        alert('No quote to tweet.');
    }
}

// Fetch a quote when the page loads
fetchQuote();