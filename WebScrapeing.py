# Importing Modules we will be using
import requests
from bs4 import BeautifulSoup as Soup
import pyppdf.patch_pyppeteer
import time 

# Setting up the client to prevent the request from being flagged as a bot and having the access denied
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
}
delay_seconds = 5
num_requests = 1

# Webscraping data from Big Basket's Fruits and Vegetables section
BB_URL = 'https://www.bigbasket.com/cl/fruits-vegetables/'

for i in range(num_requests):
    BB_Response = requests.get(BB_URL, headers=headers)
    
    if BB_Response.status_code != 200:
        print(f'Request {i + 1} failed\n Error Code: {BB_Response.status_code}')
    else:
        BBobj = Soup(BB_Response.content, 'html.parser')

        # Filter elements with the specified tags and creating lists
        BB_Name_Elements = BBobj.find_all('h3', class_='block m-0 line-clamp-2 font-regular text-base leading-sm text-darkOnyx-800 pt-0.5 h-full')
        BB_Price_Elements = BBobj.find_all('span', class_='Label-sc-15v1nk5-0 Pricing___StyledLabel-sc-pldi2d-1 gJxZPQ AypOi')

        BB_Name_List = [h3.text for h3 in BB_Name_Elements]
        BB_Price_List = [span.text for span in BB_Price_Elements]

        # Create a dictionary with h3_list as keys and span_list as values
        BB_Dict = {h3_text: span_text for h3_text, span_text in zip(BB_Name_List, BB_Price_List)}
    
    time.sleep(delay_seconds)

#Webscraping data from Dunzo's Fruits and Vegetables section
DZ_URL='https://www.dunzo.com/bangalore/smart-final-banashankari-inner?subTag=fnv'

for i in range(num_requests):
    DZ_Response = requests.get(DZ_URL, headers=headers)
    
    if DZ_Response.status_code != 200:
        print(f'Request {i + 1} failed\n Error Code: {DZ_Response.status_code}')
    else:
       DZobj=Soup(DZ_Response.content,'html.parser')
       # Filter elements with the specified tags and creating lists
       DZ_Name_Elements = DZobj.find_all('p', class_='sc-AxhCb fUOgJU sc-1twyv6b-0 kArLCp')
       DZ_Price_Elements = DZobj.find_all('p', class_='sc-AxhCb bHCIYd sc-1twyv6b-2 ootqU')

       DZ_Name_List = [h3.text for h3 in DZ_Name_Elements]
       DZ_Price_List = [span.text for span in DZ_Price_Elements]
       # Create a dictionary with h3_list as keys and span_list as values
       DZ_Dict = {h3_text: span_text for h3_text, span_text in zip(DZ_Name_List, DZ_Price_List)}
    
    time.sleep(delay_seconds)