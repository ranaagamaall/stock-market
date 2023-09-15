import user from "../../../assets/data/investor/user";
import Table from "../../../components/Table";

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
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">
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
