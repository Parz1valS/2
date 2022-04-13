import React, {useEffect, useState} from "react"
import RowTable from "./components/rowTable";
import HeadTable from "./components/headTable";
import CellTable from "./components/cellTable";


const App = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("./src/GetJSON.php")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <table>
                <HeadTable/>
                {data.map(row => (
                    <tr>
                        <CellTable cellValue = {row['FIO']}/>
                        {/*<td>{row['RECORD_BOOK']}</td>*/}
                        {/*<td>{row['FIO']}</td>*/}
                        {/*<td>{row['GROUP_NUMBER']}</td>*/}
                        {/*<td>{row['CHAIR']}</td>*/}
                        {/*<td>{row['FACULTY']}</td>*/}
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default App;