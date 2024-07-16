#!/usr/bin/python3

import requests
category = 'forgiveness'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': '2h3z6CLE+ui/dRqYQ7/0FA==okEJgtjGFgnj9sPK'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
