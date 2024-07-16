#!/usr/bin/python3

import requests
category = 'death'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'SQmx5Z961jvfFj5CFAT3Sg==0wOfzfyqn6cQYFuZ'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
