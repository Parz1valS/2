import React from 'react';
import CellTable from "./cellTable";

const RowTable = ({data=''}) => {
    console.log({data})
    const {
        RECORD_BOOK,
        FIO,
        GROUP_NUMBER,
        CHAIR,
        FACULTY
    } = data
    return (
        <div>
            <CellTable row={RECORD_BOOK}/>
            <CellTable row={FIO}/>
            <CellTable row={GROUP_NUMBER}/>
            <CellTable row={CHAIR}/>
            <CellTable row={FACULTY}/>
        </div>
    );
};

export default RowTable;