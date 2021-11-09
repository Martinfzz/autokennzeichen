/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import { useSelector } from "react-redux";
import Pins from "../Pins";
import CityInfo from "../../city-info";
import MapDisplay from "../MapDisplay";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.10,
    longitude: 10.27,
    zoom: 5.5,
    bearing: 0,
    pitch: 0,
  });

  const [popupInfo, setPopupInfo] = useState(null);
  const filteredData = useSelector((store) => store.filterData);
  const mapStyle = useSelector((store) => store.map);

  return (
    <>
      <div className="top-0 z-10 absolute">
        <MapDisplay />
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
      </div>
    </>
  );
};

export default Map;
