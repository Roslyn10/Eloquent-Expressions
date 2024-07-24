#!/usr/bin/env node 

// Defines the category of the quotes
const category = 'inspirational';
// API key for the authentication
const apiKey = 'LWQzMWWMsnKaH6wqCe4ISQ==r25JemQVIE1PLkRK';
// URL for the API request to fetch the quotes
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

// Funcation to fetch a new quote from the API
async function fetchQuote() {
    try {
        // Makes a request to the API
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey //Includes the API key in the request
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
        // Update the quote text and author on the page
        document.getElementById('quote-text').textContent = quote.quote;
        document.getElementById('quote-author').textContent = `— ${quote.author}`;
    } catch (error) {
        // Handles error 
        console.error('Error fetching quote:', error);
        // Displays error messages on the pages 
        document.getElementById('quote-text').textContent = 'Error fetching quote';
        document.getElementById('quote-author').textContent = '';
    }
}
// Fetch a quote when the page loads 
fetchQuote();