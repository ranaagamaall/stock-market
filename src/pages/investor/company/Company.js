import Chart from "../../../components/Chart";

import adminStatistics from "../../../assets/data/admin/adminStatistics"

function Company() {
    const chart = adminStatistics.chartData[1];
    return (
        <div>
            <div
                className="flex flex-wrap items-center w-full h-56 justify-evenly"
            >
                <h2 className="text-3xl font-bold text-center capitalize font-main text-text w-min">
                    Microsoft
                </h2>

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
                    <p>This conpany specializes in software and hardware and has a very promising future as the tech market is in exponential
                        increase, This conpany specializes in software and hardware and has a very promising future as the tech market is in exponential
                        increase, This conpany specializes in software and hardware and has a very promising future as the tech market is in exponential
                        increase, This conpany specializes in software and hardware and has a very promising future as the tech market is in exponential
                        increase
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 px-8 py-24 text-primary">
                    <p className="flex-1 px-4 text-center rounded-lg h-fit bg-success w-max">100%</p>
                    <p className="flex-1 px-4 text-center rounded-lg h-fit bg-success min-w-max">Best Company 2022</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-fail w-max">-100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">-100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-fail w-max">100%</p>
                    <p className="flex-1 px-4 rounded-lg h-fit bg-success w-max">100%</p>
                </div>
            </div>
        </div>
    )
}

export default Company;