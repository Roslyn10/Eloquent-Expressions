#!/usr/bin/python3

import requests
category = 'inspirational'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'LWQzMWWMsnKaH6wqCe4ISQ==r25JemQVIE1PLkRK'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
