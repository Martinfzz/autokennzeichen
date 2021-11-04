/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import MapDisplay from "../MapDisplay";
import Pins from "../Pins";
import CITIES from "../../assets/data/cities.json";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.10,
    longitude: 10.27,
    zoom: 5.5,
    bearing: 0,
    pitch: 0,
  });

  const [mapStyle, setMapStyle] = useState("");

  const setPopupInfo = () => {
    console.log("click");
  };

  return (
    <>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={setViewport}
        mapStyle={mapStyle}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Pins data={CITIES} onClick={setPopupInfo} />
      </ReactMapGL>

      <MapDisplay onChange={setMapStyle} />
    </>
  );
};

export default Map;
