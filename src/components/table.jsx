import React from 'react';
import HeadTable from "./headTable";
import RowTable from "./rowTable";

const Table = (data) => {
    console.log(data)
    return (
        <table>
            <HeadTable/>
            {data.map(row => (
                <RowTable data = {row}/>
            ))}
        </table>
    );
};

export default Table;