
function Table(props) {
    return (
        <table className="items-center w-full mb-0 align-top border-text pb text-text">
            <thead className="align-bottom">
                <tr>
                    {
                        props.columns.map((column, index) =>

                            <th key={index} className="px-6 py-3 font-semibold bg-primary text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none font-main text-xxs border-b-solid tracking-none whitespace-nowrap text-text ">
                                {column}
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.rows.map((row, index) =>
                        <tr key={index}>
                            {row}
                        </tr>
                    )
                }
            </tbody>

        </table>
    )
}

export default Table;