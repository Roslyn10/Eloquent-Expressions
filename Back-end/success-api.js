#!/usr/bin/env node

// Defines the catergory of the quotes
const category = 'Success';
// API key authentication
const apiKey = 'ipf6Izv5ye4EMjIEai8x5w==aDkza9dtDhfsu3cN';
// URL for the API request to fetch the quotes
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

// Function to fetch a new quote from the API
async function fetchQuote() {
    try {
        // Makes a reques to the API
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey // Includes the API key in the request
            }
        });
        // Check if the response is ok (status code 200-209)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // PArse the JSON data from the response
        const data = await response.json();
        // Get the first quote from the data
        const quote = data[0];
        //Update the quote text and author on the page
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
// Fetch a quote when a page loads
fetchQuote();