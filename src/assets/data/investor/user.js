import investements from '../../icons/admin/investements.svg';
import income from '../../icons/investor/income.svg';
import spending from '../../icons/investor/spending.svg';


const user = {
  id: 1,
  name: "John Doe",
  email: "john@doe.com",
  numberOfTransactions: 8,
  totalInvestment: 1000,
  currentBalance: 20000,
  pic: "https://source.unsplash.com/random/200x200",
  transactions: [
    {
      stock: "AAPL",
      amount: 1000,
      price: 100,
      transaction: "buy",
      date: "2021-05-01",
    },
    {
      stock: "Samsung",
      amount: 100,
      price: 900,
      transaction: "sell",
      date: "2021-05-04",
    },
    {
      stock: "AAPL",
      amount: 1000,
      price: 100,
      transaction: "buy",
      date: "2021-05-01",
    },
    {
      stock: "Samsung",
      amount: 100,
      price: 900,
      transaction: "buy",
      date: "2021-05-04",
    },
    {
      stock: "AAPL",
      amount: 1000,
      price: 100,
      transaction: "sell",
      date: "2021-05-01",
    },
    {
      stock: "Samsung",
      amount: 100,
      price: 900,
      transaction: "buy",
      date: "2021-05-04",
    },
  ],
  stocks: [
    { stock: "Samsung", amount: 300, price: 1900 },
    { stock: "AAPL", amount: 10, price: 4500 },
    { stock: "Figma", amount: 70, price: 900 },
  ],
  reports: [
    {
      'title': 'Total Income',
      'icon': income,
      'number': [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000,
        5000,
        4000,
        3000,
        5000,
      ],
    },
    {
      'title': 'Total Gain',
      'icon': investements,
      'number': [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000,
        5000,
        4000,
        3000,
        5000,
      ],
    },
    {
      'title': 'Total Spending',
      'icon': spending,
      'number': [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000,
        5000,
        4000,
        3000,
        3000,
      ],
      'link': '/admin/stocks'
    }]
};

export default user;
