#!/usr/bin/env node 

// Defines the catergory of the quotes
const category = 'Friendship';
// API key for the authentication
const apiKey = 'z5ik2/SD5BJbrPR45dayyA==v6odBAwdXDH40ryd';
// URL for the API request to fetch the quotes 
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

// Function to fetch a new quote from the API
async function fetchQuote() {
    try {
        // Make a request to the API 
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
        // Update the quote text from the auther on the page 
        document.getElementById('quote-text').textContent = quote.quote;
        document.getElementById('quote-author').textContent = `— ${quote.author}`;
    } catch (error) {
        // Handle errors 
        console.error('Error fetching quote:', error);
        // Displays errors messages on the page
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