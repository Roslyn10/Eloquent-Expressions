#!/usr/bin/python3

import requests
category = 'education'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'P09T+dCGZ6rXJv8y45VTOg==NUeBT6Qtvnmamr5B'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
