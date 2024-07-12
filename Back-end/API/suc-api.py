#!/usr/bin/python3

import requests
category = 'success'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'ipf6Izv5ye4EMjIEai8x5w==aDkza9dtDhfsu3cN'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
