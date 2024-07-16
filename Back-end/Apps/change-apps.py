#!/usr/bin/python3

from flask import Flask, jsonify, send_from_directory
import requests

app = Flask(__name__)

@app.route('/api/quote', methods=['GET'])
def get_quote():
    category = 'change'
    api_url = f'https://api.api-ninjas.com/v1/quotes?category={category}'
    headers = {'X-Api-Key': 'sTOdbVWWBVVvB9AszF2KvA==53Lx5w7HZSpnPTY7'}
    
    try:
        response = requests.get(api_url, headers=headers)
        print(f"API response status: {response.status_code}")
        print(f"API response text: {response.text}")
        if response.status_code == requests.codes.ok:
            return jsonify(response.json())
        else:
            return jsonify({'error': 'Error fetching quote from API'}), response.status_code
    except Exception as e:
        print(f"Exception: {e}")
        return jsonify({'error': 'Exception occurred while fetching quote'}), 500

@app.route('/')
def serve_html():
    return send_from_directory('', 'change.html')

@app.route('/change.css')
def serve_css():
    return send_from_directory('', 'change.css')

if __name__ == '__main__':
    app.run(debug=True)
