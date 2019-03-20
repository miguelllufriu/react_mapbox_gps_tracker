import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { DataListWrapper } from './DataListWrapper';


export const MapWrapper = () => {
    
    const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;
    
    const [viewport, useViewport] = useState({
        width: 800,
        height: 800,
        latitude: 40.0077,
        longitude: 3.8376,
        zoom: 8
      });

    return (
        <div>
            <DataListWrapper />
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                onViewportChange={(viewport) => useViewport({...viewport})}
            />
        </div>
    );
}