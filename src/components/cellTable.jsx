import React, {useState} from 'react';

const CellTable = ({row}) => {
    const [state, setState] = useState(row)
    return (
        <div className="table_cell">
            <input
            value={state}
            onChange={({target}) => setState(target.value)}
            type="text"/>
        </div>
    );
};

export default CellTable;