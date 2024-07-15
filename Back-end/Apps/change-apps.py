#!/usr/bin/python3

from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/api/quote', methods=['GET'])
def get_quote():
    category = 'change'
    api_url = f'https://api.api-ninjas.com/v1/quotes?category={category}'
    response = requests.get(api_url, headers={'X-Api-Key': 'sTOdbVWWBVVvB9AszF2KvA==53Lx5w7HZSpnPTY7'})
    if response.status_code == requests.codes.ok:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Error fetching quote'}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
