import { useRef, useState } from "react";
import user from "../../../assets/data/investor/user";
import Table from "../../../components/Table";
import Dailog from "../../../components/Dailog";

function Stocks() {
  const sellRef = useRef();
  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      rv[x[key]] =
        x.transaction === "buy"
          ? rv[x[key]] + x["price"] || x["price"]
          : rv[x[key]] - x["price"] || -x["price"];
      return rv;
    }, {});
  };

  let stocks = groupBy(user.transactions, "stock");
  let result = Object.entries(stocks).map(([name, values]) => ({
    name,
    ...values,
  }));
  console.log(result);

  return (
    <div className="">
      <Table
        columns={["Stock", "Amount", "Price", ""]}
        rows={user.stocks.map((stock) => {
          return (
            <>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
                  {stock.stock}
                </p>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
                  {stock.amount}
                </p>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent flex justify-center gap-3">
                <p className="mb-0 font-medium leading-tight text-s font-main opacity-80">
                  $ {stock.price}
                </p>
              </td>
              <td className="p-2 align-middle border-b whitespace-nowrap shadow-transparent">
                <button
                  onClick={() => sellRef.current.showModal()}
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
        onSubmit={() => console.log("as")}
        submitText="Sell"
      >
        <input
          type="number"
          className="w-full p-2 border-2 rounded-lg outline-none border-primary text-primary"
          placeholder="Enter amount of stocks"
        />
        <p>pew pew</p>
      </Dailog>
    </div>
  );
}

export default Stocks;
