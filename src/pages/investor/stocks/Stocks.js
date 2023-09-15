import { useRef, useState } from "react";
import Table from "../../../components/Table";
import Dailog from "../../../components/Dailog";

function Stocks(props) {
  const sellRef = useRef();
  const sellAmmountRef = useRef();

  const [sellAmmount, setSellAmmount] = useState(0);
  const [error, setError] = useState("");
  const [companyToSell, setCompanyToSell] = useState(0);

  // var groupBy = function (xs, key) {
  //   return xs.reduce(function (rv, x) {
  //     rv[x[key]] =
  //       x.transaction === "buy"
  //         ? rv[x[key]] + x["price"] || x["price"]
  //         : rv[x[key]] - x["price"] || -x["price"];
  //     return rv;
  //   }, {});
  // };

  // let stocks = groupBy(user.transactions, "stock");
  // let result = Object.entries(stocks).map(([name, values]) => ({
  //   name,
  //   ...values,
  // }));
  // console.log(result);
  // 

  function handleSell(event) {
    if (sellAmmountRef.current.value === "" || error !== "") {
      return;
    }
    props.user.currentBalance += parseInt(sellAmmountRef.current.value) * props.user.stocks[companyToSell].price;
    props.user.stocks[companyToSell].amount -= parseInt(sellAmmountRef.current.value);
    sellAmmountRef.current.value = "";
    props.user.stocks = props.user.stocks.filter(stock => stock.amount > 0);
    setCompanyToSell(0);
    sellRef.current.close();
    props.setReload((reload) => !reload);
  }


  function handleStocksChange(event) {
    if (parseInt(sellAmmountRef.current.value) <= 0) {
      setError("Enter a valid amount");
    } else if (parseInt(sellAmmountRef.current.value) > props.user.stocks[companyToSell].amount) {
      setError("You don't have enough stocks");
    }
    else {
      setError("");
      setSellAmmount(parseInt(sellAmmountRef.current.value));
    }
  }


  const tdataClass = "p-2 align-middle bg-transparent border-b text-center whitespace-nowrap shadow-transparent";
  return (
    <div >
      <Table
        columns={["Stock", "Amount", "Price", ""]}
        rows={props.user.stocks.map((stock, index) => {
          return (
            <>
              <td className={tdataClass}>
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
                  {stock.stock}
                </p>
              </td>
              <td className={tdataClass}>
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
                  {stock.amount}
                </p>
              </td>
              <td className={tdataClass}>
                <p className="mb-0 font-medium leading-tight text-s font-main opacity-80">
                  $ {stock.price}
                </p>
              </td>
              <td className={tdataClass}>
                <button
                  onClick={() => { setCompanyToSell(index); sellRef.current.showModal() }}
                  className="px-4 py-2 font-semibold leading-tight rounded-lg text-s bg-success text-primary font-main"
                >
                  sell
                </button>
              </td>
            </>
          );
        })}
      />
      <Dailog
        ref={sellRef}
        name="Sell stocks"
        className="mt-[10%] w-1/2"
        onSubmit={handleSell}
        submitText="Sell"
      >
        <input
          type="number"
          ref={sellAmmountRef}
          onChange={handleStocksChange}
          pattern="[0-9]"
          className="w-full p-2 border-2 rounded-lg outline-none peer invalid:border-fail border-primary text-primary"
          placeholder="Enter amount of stocks"
        />
        {error ? <p className="font-semibold text-fail">{error}</p> :
          sellAmmount ? <p className="py-6 peer-invalid:hidden text-text">You will get <b className=" text-accent">$ {sellAmmount * props.user.stocks[companyToSell].price}</b> for <b className="text-accent">{sellAmmount}</b> shares</p> : ""}
      </Dailog>
    </div>
  );
}

export default Stocks;
