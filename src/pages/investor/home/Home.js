import StatCard from "../../../components/StatCard";
import reportData from "../../../assets/data/investor/report";
import companiesData from "../../../assets/data/investor/companiesData"
import Table from "../../../components/Table";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const companies = companiesData.companies;
  return (
    <div className=" text-text">
      <div className="flex justify-between gap-8 h-fit translate-y-[-65%]">
        {reportData.map((data, index) => (
          <div className="w-full max-w-[min(30vw,18rem)]" key={index}>
            <StatCard
              stat={data}
            />
          </div>
        ))}
      </div>
      <div className="p-0 overflow-x-auto h-[80vh] font-main capitalize">
            <Table columns={companiesData.columns} rows={companies.map((company) => {
              return (
                <>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent flex justify-center">
                    <div className="flex px-2 py-1">
                      <div>
                        <img src={company.pic} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="company" />
                      </div>
                      <div className="flex flex-col justify-center ">
                        <h6 className="mb-0 text-sm leading-normal ">{company.name}</h6>
                      </div>
                    </div>
                  </td>

                  <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-">
                    <p className="mb-0 font-medium leading-tight text-center text-s  opacity-80 ">{company.summary}</p>
                  </td>
                  <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p className="mb-0 font-medium leading-tight text-center text-s  opacity-80">$ {company.stockValue}</p>
                  </td>
                  <td className="p-2 align-middle border-b whitespace-nowrap shadow-transparent">
                    <button onClick={() => {navigate("/company/" + company.id)}}
                      className="px-4 py-2 font-semibold leading-tight rounded-lg text-s bg-success text-primary ">Details</button>

                  </td>
                </>
              )
            })} />
          </div>
    </div>
  );
}

export default Home;
