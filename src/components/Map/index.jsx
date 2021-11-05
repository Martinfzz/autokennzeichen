/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import MapDisplay from "../MapDisplay";
import Pins from "../Pins";
import CITIES from "../../assets/data/cities.json";
import CityInfo from "../../city-info";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.10,
    longitude: 10.27,
    zoom: 5.5,
    bearing: 0,
    pitch: 0,
  });

  const [mapStyle, setMapStyle] = useState("");

  const [popupInfo, setPopupInfo] = useState(null);

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

        {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          <CityInfo info={popupInfo} />
        </Popup>
        )}

      </ReactMapGL>
      <MapDisplay onChange={setMapStyle} />
    </>
  );
};

export default Map;
