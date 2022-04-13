import React from 'react';
import CellTable from "./cellTable";

const RowTable = ({data}) => {

     return (
        <tr>
            <CellTable cellValue={data['RECORD_BOOK']}/>
            <CellTable cellValue={data['FIO']}/>
            <CellTable cellValue={data['GROUP_NUMBER']}/>
            <CellTable cellValue={data['CHAIR']}/>
            <CellTable cellValue={data['FACULTY']}/>
        </tr>
    );
};

export default RowTable;