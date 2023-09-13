import { XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';


export default function Chart(props) {


    return (
        <ResponsiveContainer width={props.width} height={props.height}>
            {
                props.type === 'bar' ?
                    <BarChart
                        data={props.data}
                    >
                        <XAxis dataKey={props.xKey} />
                        <YAxis color='#FFFFFF' />
                        <Tooltip labelStyle={{ color: "black" }} />
                        <Bar dataKey={props.yKey} fill="#8884d8" />
                    </BarChart> :

                    <AreaChart data={props.data}>
                        <defs>
                            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={props.xKey} />
                        <YAxis domain={["dataMin", 'dataMax']} />
                        <Tooltip labelStyle={{ color: "black" }} />
                        <Area type="monotone" dataKey={props.yKey} stroke="#8884d8" fillOpacity={1} fill="url(#color1)" activeDot={{ r: 8 }} />
                    </AreaChart>
            }
        </ResponsiveContainer>
    );

}