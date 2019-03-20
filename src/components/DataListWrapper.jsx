import React, { useState } from 'react';
import { DataListItem } from './DataListItem';

export const DataListWrapper = () => {

    const [items, setItems] = useState([]);

    return (
        (useState(items) <= 0) 
            ? <div>No hay datos disponibles...</div> 
            : <DataListItem dataID={1} />
    );

}