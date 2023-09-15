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
};

export default user;