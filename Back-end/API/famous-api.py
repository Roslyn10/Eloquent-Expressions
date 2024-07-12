#!/usr/bin/python3

import requests
category = 'famous'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'zcwXT4Ao+jzDvWed2gRXpg==JBxojqpT5T9IkWQF'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
