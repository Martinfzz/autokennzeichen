/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import MapDisplay from "../MapDisplay";
import Pins from "../Pins";
import CityInfo from "../../city-info";
import Cities from "../Cities";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.10,
    longitude: 10.27,
    zoom: 5.5,
    bearing: 0,
    pitch: 0,
  });

  const [mapStyle, setMapStyle] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [popupInfo, setPopupInfo] = useState(null);

  console.log(filteredData);

  return (
    <>
      <div className="top-0 z-10 absolute">
        <Cities data={setFilteredData} />
        <ReactMapGL
          {...viewport}
          width="100vw"
          height="100vh"
          onViewportChange={setViewport}
          mapStyle={mapStyle}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Pins data={filteredData} onClick={setPopupInfo} />

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
      </div>
    </>
  );
};

export default Map;
