#Importing Modules we will be using
import requests
from bs4 import BeautifulSoup as Soup
import pyppdf.patch_pyppeteer
import time 

#Setting up the client to prevent the request from being flagged as a bot and having the access denied
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',}
delay_seconds = 5
num_requests = 1

#Webscraping raw unfiltered data from Big Basket's Fruits and Vegetables section
BB_URL='https://www.bigbasket.com/cl/fruits-vegetables/'

for i in range(num_requests):
    BB_Response = requests.get(BB_URL, headers=headers)
    
    if BB_Response.status_code != 200:
        print(f'Request {i + 1} failed\n Error Code: {BB_Response.status_code}')
    else:
        BBobj=Soup(BB_Response.content)
        print("BigBasket Output:\n",BBobj)
    
    time.sleep(delay_seconds)

#Webscraping raw unfiltered data from Dunzo's Fruits and Vegetables section
DZ_URL='https://www.dunzo.com/bangalore/smart-final-banashankari-inner?subTag=fnv'

for i in range(num_requests):
    DZ_Response = requests.get(DZ_URL, headers=headers)
    
    if DZ_Response.status_code != 200:
        print(f'Request {i + 1} failed\n Error Code: {DZ_Response.status_code}')
    else:
       DZobj=Soup(DZ_Response.content)
       print("Dunzo's Output:\n",DZobj)
    
    time.sleep(delay_seconds)