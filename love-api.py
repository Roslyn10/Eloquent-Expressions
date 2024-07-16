#!/usr/bin/python3

import requests
category = 'love'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'ZNTquHnb6+ErVsKcInX1KQ==sChtwswhKK1yeRI2'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
