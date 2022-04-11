import React, {useEffect, useState} from "react"

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
                <tr>
                    <th>№ зачетки</th>
                    <th>ФИО</th>
                    <th>№ группы</th>
                    <th>Кафедра</th>
                    <th>Факультет</th>
                </tr>
                {data.map(row => (
                    <tr>
                        <td>{row['RECORD_BOOK']}</td>
                        <td>{row['FIO']}</td>
                        <td>{row['GROUP_NUMBER']}</td>
                        <td>{row['CHAIR']}</td>
                        <td>{row['FACULTY']}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default App;