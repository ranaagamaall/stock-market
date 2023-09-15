
function StatCard(props) {

    const getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length
    const getPercentage = (arr) => ((arr[arr.length - 1] - getAverage(arr)) * 100 / getAverage(arr)).toFixed(1)

    return (
        <div
            className="flex-1 min-w-[15rem] rounded-lg shadow-xl bg-secondary"
        >
            <div className="px-1 py-5 md:p-5">
                <div className="flex justify-between">
                    <img src={props.stat.icon} alt='icon' className="w-[2.5rem]" />
                    <div className={`${getPercentage(props.stat.number) > 0 ? "bg-success" : "bg-fail"} w-max rounded-full h-6 px-2 flex justify-items-center text-primary font-main font-semibold text-sm`}>
                        <span className="flex items-center">{getPercentage(props.stat.number)} %</span>
                    </div>
                </div>
                <div className="flex-1 w-full mt-4">
                    <div>
                        <div className="mt-3 text-2xl font-bold leading-8">{props.stat.number[props.stat.number.length - 1]}</div>
                        <div className="mt-1 text-xl font-regular font-main text-text">{props.stat.title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatCard;
