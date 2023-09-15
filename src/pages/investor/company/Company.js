import Chart from "../../../components/Chart";

import companiesData from "../../../assets/data/investor/companiesData";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dailog from "../../../components/Dailog";

function Company(props) {
    let { id } = useParams();
    const buyRef = useRef(null);
    const stockValueRef = useRef(null);
    const [stocks, setStocks] = useState(0);
    const [error, setError] = useState("");


    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const chosenCompany = companiesData.companies.find(company => company.id === parseInt(id));
    const [chart, setChart] = useState(chosenCompany.chartData);
    const [selectOptions, setSelectOptions] = useState([...months.keys()]);
    const fromRef = useRef(null);
    const toRef = useRef(null);

    function fromOnChange() {
        const fromNumber = parseInt(fromRef.current.value);
        let toNumber = parseInt(toRef.current.value);

        const newChart = { ...chosenCompany.chartData };
        setSelectOptions([...months.keys()].slice(fromNumber + 1));

        if (fromNumber > toNumber) {
            toRef.current.value = fromNumber + 1;
            toNumber = parseInt(toRef.current.value);
        }
        newChart.data = newChart.data.slice(fromNumber, toNumber + 1);
        setChart(newChart);
    }

    function toOnChange() {
        const fromNumber = parseInt(fromRef.current.value);
        const toNumber = parseInt(toRef.current.value);
        const newChart = { ...chosenCompany.chartData };
        newChart.data = newChart.data.slice(fromNumber, toNumber + 1);
        setChart(newChart);
    }

    function handleBuy(event) {
        if (stockValueRef.current.value === "" || error) {
            return;
        }
        props.user.currentBalance -= parseInt(stockValueRef.current.value) * chosenCompany.stockValue;
        stockValueRef.current.value = "";
        buyRef.current.close();
        props.setReload((reload) => !reload);
    }


    function handleStocksChange(event) {
        if (parseInt(stockValueRef.current.value) <= 0) {
            setError("Enter a valid amount");
        } else if (parseInt(stockValueRef.current.value) * chosenCompany.stockValue > props.user.currentBalance) {
            setError("You don't have enough balance");
        }
        else
            setError("");
        setStocks(parseInt(stockValueRef.current.value));
    }


    return (
        <div>
            <div className="flex flex-wrap items-center w-full h-56 pt-10 justify-evenly">
                <h2 className="text-3xl font-bold text-center capitalize font-main text-text w-min">
                    {chosenCompany.name}
                </h2>
                <select
                    ref={fromRef}
                    onChange={fromOnChange}
                    className=" [&>*]:text-primary   rounded-lg border outline-none bg-transparent px-3 py-1 "
                >
                    {[...Array(11).keys()].map((option, index) => (
                        <option key={index} value={option}>
                            {months[option]}
                        </option>
                    ))}
                </select>
                <select
                    ref={toRef}
                    onChange={toOnChange}
                    className=" [&>*]:text-primary   rounded-lg border outline-none bg-transparent px-3 py-1 "
                >
                    {selectOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {months[option]}
                        </option>
                    ))}
                </select>
                <Chart
                    type={chart.type}
                    width="70%"
                    data={chart.data}
                    xKey="date"
                    yKey="number"
                />
            </div>
            <div className="grid grid-cols-2 ">
                <div className="p-8">
                    <h3 className="pb-4 text-2xl font-bold">Summary</h3>
                    <p>
                        {chosenCompany.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 px-8 py-24 text-primary">
                    <p className="flex-1 px-4 text-center rounded-lg h-fit bg-success w-max">
                        100%
                    </p>
                    <p className="flex-1 px-4 text-center rounded-lg h-fit bg-success min-w-max">
                        Best Company 2022
                    </p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-fail w-max">-100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">-100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-fail w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                </div>
            </div>

            <div className="flex py-4 text-primary">
                <button onClick={() => buyRef.current.showModal()}
                    className="px-8 py-3 mx-auto text-lg font-medium capitalize bg-accent rounded-xl">
                    invest now
                </button>
            </div>
            <Dailog ref={buyRef} name="Purchase stocks" className="mt-[10%] w-1/2" onSubmit={handleBuy} submitText="Purchase">
                <input type="number" pattern="[0-9]" ref={stockValueRef} className="w-full p-2 border-2 rounded-lg outline-none border-primary text-primary invalid:border-fail" onChange={handleStocksChange} placeholder="Enter amount of stocks" />
                {error ? <p className="font-semibold text-fail">{error}</p> :
                    stocks ? <p className="py-6 text-text">You will get <b className=" text-accent">{stocks}</b> shares for <b className="text-accent">$ {stocks * chosenCompany.stockValue}</b></p> : ""}
            </Dailog>
        </div>
    );
}

export default Company;
