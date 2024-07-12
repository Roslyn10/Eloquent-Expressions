#!/usr/bin/python3

import requests
category = ''
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'KUyduUMwOtcjg4wzNMPkUQ==zFcOnGCoi2WjgHb0'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
