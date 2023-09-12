import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


// export default function Chart(props) {
//     console.log(props.data);
//     return (
//         <ResponsiveContainer width="80%" height="40%" >
//             <BarChart
//                 width="100%"
//                 height="100%"
//                 data={props.data}
//             // margin={{
//             //     top: 5,
//             //     right: 30,
//             //     left: 20,
//             //     bottom: 5,
//             // }}
//             >
//                 {/* <CartesianGrid strokeDasharray="3 3" /> */}
//                 <XAxis dataKey={props.xKey} />
//                 <YAxis domain={['dataMin', 'dataMax']} />
//                 {/* open modal on hover */}
//                 <Tooltip />
//                 {/* <Legend /> */}
//                 <Bar dataKey={props.ykey} fill="#000" />
//                 {/* <Line type="monotone" dataKey={props.yKey} stroke="#8884d8" activeDot={{ r: 8 }} /> */}
//                 {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//             </BarChart>
//         </ResponsiveContainer>
//     );
// }
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

                    <LineChart data={props.data}>
                        <XAxis dataKey={props.xKey} />
                        <YAxis domain={['dataMin', 'dataMax']} />
                        <Tooltip labelStyle={{ color: "black" }} />
                        <Line type="monotone" dataKey={props.yKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
            }
        </ResponsiveContainer>
    );

}