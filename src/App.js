import React from 'react';
import axios from "axios";

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
     fetch('./src/GetJson.php')
         .then(response => response.json())
         .then(data => console.log(data));
   // axios({
   //     method: 'POST',
   //     url: './src/GetJson.php',
   //     data: [
   //              <tr>
   //             <td>'RECORD_BOOK'</td>
   //             <td>'FIO'</td>
   //             <td>'GROUP_NUMBER'</td>
   //             <td>'CHAIR'</td>
   //             <td>'FACULTY'</td>
   //         </tr>
   //          ]
   // })
   //  axios({
   //      method: 'get',
   //      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   //      url: './src/GetJson.php',
   //      data: [
   //          <tr>
   //              <td>'RECORD_BOOK'</td>
   //              <td>'FIO'</td>
   //              <td>'GROUP_NUMBER'</td>
   //              <td>'CHAIR'</td>
   //              <td>'FACULTY'</td>
   //          </tr>
   //      ]
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // })
    //})
    return (
        <div>
            {tab}
        </div>
    );
}

export default App;
