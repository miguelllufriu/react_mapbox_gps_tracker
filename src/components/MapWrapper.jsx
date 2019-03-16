import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';


export function MapWrapper() {
    
    const TOKEN = 'pk.eyJ1IjoibWlybWlsaW4iLCJhIjoiY2p0YmdwZTQxMGtkYjN5bzNneHVnaHF2NyJ9.vYHU4-q6NWicDd0H6JSElg';
    
    const [viewport, useViewport] = useState({
        width: 800,
        height: 800,
        latitude: 40.7577,
        longitude: 3.4376,
        zoom: 8
      });
    useEffect(() => {
        console.log(viewport)
    });
    return (
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => useViewport({...viewport})}
        />
    );
}