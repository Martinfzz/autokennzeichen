import * as React from "react";
import { fromJS } from "immutable";
import MAP_STYLE from "../../assets/data/map-style-basic-v8.json";

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

  return defaultMapStyle.set("layers", layers);
}

function StyleControls(props) {
  const visibility = {
    water: true,
    parks: true,
    buildings: true,
    roads: true,
    labels: true,
    background: true,
  };

  // const color = {
  //   water: "#DBE2E6",
  //   parks: "#E6EAE9",
  //   buildings: "#c0c0c8",
  //   roads: "#ffffff",
  //   labels: "#78888a",
  //   background: "#EBF0F0",
  // };

  const color = {
    water: "#242424",
    parks: "#2d2b2b",
    buildings: "#262626",
    roads: "#444444",
    labels: "#3e3c3c",
    background: "#2f2f2f",
  };

  // eslint-disable-next-line react/destructuring-assignment
  props.onChange(getMapStyle({ visibility, color }));

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <></>
  );
}

export default React.memo(StyleControls);
