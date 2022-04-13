import React, {useEffect, useState} from "react"
import Table from "./components/table";
import HeadTable from "./components/headTable";
import RowTable from "./components/rowTable";


const App = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("../src/GetJSON.php")
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
                    <RowTable data = {row}/>
                ))}
            </table>
        </div>
    )
}

export default App;