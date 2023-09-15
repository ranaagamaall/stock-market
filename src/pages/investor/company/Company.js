import Chart from "../../../components/Chart";

import companiesData from "../../../assets/data/investor/companiesData";
import { useRef, useState } from "react";
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
        if (stockValueRef.current.value === "" || error !== "") {
            return;
        }
        props.user.currentBalance -= parseInt(stockValueRef.current.value) * chosenCompany.stockValue;

        if (props.user.stocks.find(stock => stock.stock === chosenCompany.name)) {
            props.user.stocks.find(stock => stock.stock === chosenCompany.name).ammount += parseInt(stockValueRef.current.value);
        }
        else
            props.user.stocks.push({ stock: chosenCompany.name, amount: stocks, price: chosenCompany.stockValue })

        stockValueRef.current.value = "";
        setStocks(0);
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
        <div className="flex flex-col gap-8 mt-16 font-main">
            <div className="flex flex-wrap items-center w-full h-56 gap-4 px-8 mb-4 justify-evenly">
                <h2 className="flex flex-col items-center gap-4 text-3xl font-bold text-center capitalize font-main text-text w-min">
                    {chosenCompany.name}
                    <span className="px-4 text-xl font-semibold rounded-full w-fit text-primary bg-accent">
                        $ {chosenCompany.stockValue}
                    </span>

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
                    defaultValue={11}
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
            <div className="flex flex-wrap ">
                <div className="flex-1 p-8">
                    <h3 className="pb-4 text-2xl font-bold min-w-[16rem]">Summary</h3>
                    <p>
                        {chosenCompany.description}
                    </p>
                </div>
                <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold capitalize ">company statistics</h3>
                    <div className="flex flex-wrap gap-4 py-8 text-primary">
                        {chosenCompany.tags.map((item, index) => (
                            <p key={index} className={`${item.positive ? "bg-success " : "bg-fail "} px-4 rounded-lg h-fit w-max`}>{item.title}</p>
                        ))
                        }

                    </div>

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
