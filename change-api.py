#!/usr/bin/python3

import requests
category = 'change'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'sTOdbVWWBVVvB9AszF2KvA==53Lx5w7HZSpnPTY7'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
