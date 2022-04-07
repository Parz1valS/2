import React from 'react';

function App() {

    const tab = (
        <table>
            <tbody>
            <tr>
                <th>№ зачетки</th>
                <th>ФИО</th>
                <th>№ группы</th>
                <th>Кафедра</th>
                <th>Факультет</th>
            </tr>
            </tbody>
        </table>
    );
     fetch('../src/GetJson.php')
         .then(response => response.json())
         .then(data => console.log(data));
    return (
        <div>
            {tab}
        </div>
    );
}

export default App;
