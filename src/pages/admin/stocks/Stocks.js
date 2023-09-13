import StockForm from "../../../components/StockForm";

function Stocks() {
  function handleSubmit(values) {}
  return (
    <div className="flex justify-evenly">
      <div className="text-center flex flex-col justify-center gap-6">
        <h3 className="text-accent font-main text-3xl uppercase font-semibold">
          Introduce stocks
        </h3>
        <p className="text-text font-main capitalize font-regular text-xl">
          for new companies
        </p>
      </div>
      <div className="w-[50%] px-12">
        <StockForm />
      </div>
    </div>
  );
}

export default Stocks;
