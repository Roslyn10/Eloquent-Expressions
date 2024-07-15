#!/usr/bin/python3

from flask import Flask, jsonify, send_from_directory
import requests

app = Flask(__name__)

@app.route('/quote')
def get_quote():
    category = ''
    api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
    response = requests.get(api_url, headers={'X-Api-Key': 'KUyduUMwOtcjg4wzNMPkUQ==zFcOnGCoi2WjgHb0'})
    if response.status_code == requests.codes.ok:
        return jsonify(response.json())
    else:
        return jsonify({'error': response.status_code, 'message': response.text}), response.status_code

@app.route('/<path:path>')
def static_file(path):
    return send_from_directory('', path)

if __name__ == '__main__':
    app.run(debug=True)

