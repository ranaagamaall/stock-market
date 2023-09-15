import user from "../../../assets/data/investor/user";
import Table from "../../../components/Table";
import arrowUp from "../../../assets/icons/investor/arrow-up.svg";
import arrowDown from "../../../assets/icons/investor/arrow-down.svg";

function Transactions() {
  return (
    <div className="">
      <Table
        columns={["Stock", "Amount", "Price", "Date"]}
        rows={user.transactions.map((investment) => {
          return (
            <>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
                  {investment.stock}
                </p>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
                  {investment.amount}
                </p>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent flex justify-center gap-3">
                {investment.transaction == "sell" ? (
                  <img src={arrowUp} alt="" className="w-6" />
                ) : (
                  <img src={arrowDown} alt="" className="w-6" />
                )}
                <p className="mb-0 font-medium leading-tight text-s font-main opacity-80">
                  $ {investment.price}
                </p>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
                  {investment.date}
                </p>
              </td>
            </>
          );
        })}
      />
    </div>
  );
}

export default Transactions;
