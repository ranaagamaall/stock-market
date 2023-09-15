
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Admin View:
1. Home Page (dashboard):
- view users and companies statistics

2. Stocks Page:
- Add stocks for new companies and specify their initial price 

3. Investors Page:
- view all investors details
- search by investor name
- view investor transactions log 


## Investor View:

1. Home Page:
- view account statistics.
- search by company name
- view all companies.

2. Company Page:
- view company graphs, description, statistics
- control company graph window
- purchase stocks ()

3. Stocks Page:
- view previously owned and newly purchased stocks grouped by company name
- sell from available stocks

4. Transactions Page:
- view all previous transactions details

5. Add Funds to wallet 

## Implemented Functionalities:
1. dashboard percentage change values are calculated from a history of logs and dynamically rendered according to increase or decrease result
2. validations on all form fields are applied 
3. when stocks are purchased/sold they get reflected in user's stocks log
4. transactions dynamically show whether it was a sell or buy transaction according to incoming data(arrows are not arbitarily rendered)