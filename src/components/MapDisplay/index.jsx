import * as React from "react";
import { fromJS } from "immutable";
import MAP_STYLE from "../../assets/data/map-style-basic-v8.json";
import store from "../../store/store";
import { mapInfos } from "../../store/user/userAction";

const defaultMapStyle = fromJS(MAP_STYLE);
const defaultLayers = defaultMapStyle.get("layers");

const categories = ["labels", "roads", "buildings", "parks", "water", "background"];

// Layer id patterns by category
const layerSelector = {
  background: /background/,
  water: /water/,
  parks: /park/,
  buildings: /building/,
  roads: /bridge|road|tunnel/,
  labels: /label|place|poi/,
};

// Layer color class by type
const colorClass = {
  line: "line-color",
  fill: "fill-color",
  background: "background-color",
  symbol: "text-color",
};

function getMapStyle({ visibility, color }) {
  const layers = defaultLayers
    .filter((layer) => {
      const id = layer.get("id");
      return categories.every((name) => visibility[name] || !layerSelector[name].test(id));
    })
    .map((layer) => {
      const id = layer.get("id");
      const type = layer.get("type");
      const category = categories.find((name) => layerSelector[name].test(id));
      if (category && colorClass[type]) {
        return layer.setIn(["paint", colorClass[type]], color[category]);
      }
      return layer;
    });

  store.dispatch(mapInfos(defaultMapStyle.set("layers", layers)));
}

function StyleControls() {
  const visibility = {
    water: true,
    parks: true,
    buildings: true,
    roads: true,
    labels: true,
    background: true,
  };

  const color = {
    water: "#242424",
    parks: "#2d2b2b",
    buildings: "#262626",
    roads: "#444444",
    labels: "#3e3c3c",
    background: "#2f2f2f",
  };

  getMapStyle({ visibility, color });

  return (
    <></>
  );
}

export default React.memo(StyleControls);
