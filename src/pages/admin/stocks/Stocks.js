import StockForm from "../../../components/StockForm";

function Stocks() {
  function handleSubmit(values) { }
  return (
    <div className="flex flex-wrap justify-evenly">
      <div className="flex flex-col justify-center gap-6 text-center basis-1/2">
        <h3 className="text-3xl font-semibold uppercase text-accent font-main">
          Introduce stocks
        </h3>
        <p className="text-xl capitalize text-text font-main font-regular">
          for new companies
        </p>
        <img className="w-3/5 mx-auto rounded-3xl" src="https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?w=1060&t=st=1694567619~exp=1694568219~hmac=9ce454bf5dc5931019b322e2e30f44530ce14bd69ec066465c9d92927b806778" />
      </div>
      <div className="px-12 basis-4/6">
        <StockForm />
      </div>
    </div>
  );
}

export default Stocks;
