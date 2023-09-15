import Chart from "../../../components/Chart";

import adminStatistics from "../../../assets/data/admin/adminStatistics";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dailog from "../../../components/Dailog";

function Company() {
    let { path } = useParams();
    const buyRef = useRef(null);
    const [money, setMoney] = useState(0);

    useEffect(() => {
        console.log(path);
    }, [path]);
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
    const [chart, setChart] = useState(adminStatistics.chartData[1]);
    const [selectOptions, setSelectOptions] = useState([...months.keys()]);
    const fromRef = useRef(null);
    const toRef = useRef(null);


    function fromOnChange() {
        const fromNumber = parseInt(fromRef.current.value);
        let toNumber = parseInt(toRef.current.value);

        const newChart = { ...adminStatistics.chartData[1] };
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
        const newChart = { ...adminStatistics.chartData[1] };
        newChart.data = newChart.data.slice(fromNumber, toNumber + 1);
        setChart(newChart);
    }

    return (
        <div>
            <div className="flex flex-wrap items-center w-full h-56 pt-10 justify-evenly">
                <h2 className="text-3xl font-bold text-center capitalize font-main text-text w-min">
                    Microsoft
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
                        This conpany specializes in software and hardware and has a very
                        promising future as the tech market is in exponential increase, This
                        conpany specializes in software and hardware and has a very
                        promising future as the tech market is in exponential increase, This
                        conpany specializes in software and hardware and has a very
                        promising future as the tech market is in exponential increase, This
                        conpany specializes in software and hardware and has a very
                        promising future as the tech market is in exponential increase
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
            <Dailog ref={buyRef} name="Purchase stocks" className="mt-[10%] w-1/2" onSubmit={() => console.log("as")} submitText="Purchase">
                <input type="number" className="w-full p-2 border-2 rounded-lg outline-none border-primary text-primary" onChange={(e) => setMoney(parseInt(e.target.value))} placeholder="Enter amount in USD" />
                {money ? <p className="py-6 text-text">You will get <b className=" text-accent">{money * 2}</b> shares for <b className="text-accent">$ {money}</b></p> : ""}
            </Dailog>
        </div>
    );
}

export default Company;
