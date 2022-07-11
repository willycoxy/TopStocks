import alpaca_trade_api as tradeapi
import numpy as np
# import time
import pandas as pd

API_KEY = "PKWN4ISE3BHWPB12ROKK"
API_SECRET = "ev0jikiTIFEc3gBjqoY8ATNsrOz2u4CDeKeJvE2O"
BASE_URL = "https://paper-api.alpaca.markets"



alpaca_client = tradeapi.REST(API_KEY, API_SECRET, BASE_URL)



symbol = "TSLA"
timeframe = "1D"
start = "2022-01-01"
end = "2022-01-31"

tsla = alpaca_client.get_bars(symbol, timeframe, start, end).df

# ticker_data = api.get_barset(
#     symbol,
#     timeframe,
#     start=start,
#     end=end,
#     limit= 1000,
# ).df

#ticker_data.head()\
print(tsla)



