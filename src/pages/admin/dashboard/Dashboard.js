import adminStatistics from "../../../assets/data/admin/adminStatistics";
import Chart from "../../../components/Chart";



const getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length
const getPercentage = (arr) => ((arr[arr.length - 1] - getAverage(arr)) * 100 / getAverage(arr)).toFixed(1)

function Dashboard() {
    return (
        <>
            <div className="grid grid-cols-12 gap-6 h-fit">
                {adminStatistics.values.map((stat, index) => (

                    <a
                        className="col-span-12 transition duration-300 transform rounded-lg shadow-xl hover:scale-105 sm:col-span-6 xl:col-span-3 intro-y bg-secondary"
                        href="#"
                        key={index}
                    >
                        <div className="p-5">
                            <div className="flex justify-between">
                                <img src={stat.icon} alt='icon' className="w-[2.5rem]" />
                                <div className={`${getPercentage(stat.number) > 0 ? "bg-success" : "bg-fail"} rounded-full h-6 px-2 flex justify-items-center text-primary font-main font-semibold text-sm`}>
                                    <span className="flex items-center">{getPercentage(stat.number)} %</span>
                                </div>
                            </div>
                            <div className="flex-1 w-full ml-2">
                                <div>
                                    <div className="mt-3 text-3xl font-bold leading-8">{stat.number[stat.number.length - 1]}</div>
                                    <div className="mt-1 text-base font-medium font-main text-text">{stat.title}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                )
                )}
            </div>
            {
                adminStatistics.chartData.map((chart, index) => (
                    <div className="flex items-center w-full h-56 justify-evenly" key={index}>
                        <h2 className="text-2xl font-bold text-center capitalize font-main text-text w-min">{chart.title}</h2>
                        <Chart type={chart.type} width="60%" data={chart.data} xKey="date" yKey="number" />
                    </div>
                ))
            }
        </>
    );
}

export default Dashboard;