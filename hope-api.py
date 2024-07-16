#!/usr/bin/python3

import requests
category = 'hope'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'ee2i+GBH+ll4NVAvjR79+A==YUuxVikUBL6EyKtn'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
