import React, {useState} from 'react';

const CellTable = ({row}) => {
    const [state, setState] = useState(row)
    return (
        <div>

            <input
            value={state}
            onChange={({target}) => setState(target.value)}
            type="text"/>
        </div>
    );
};

export default CellTable;