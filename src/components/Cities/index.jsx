import React from "react";
import CITIES from "../../assets/data/cities.json";

const Cities = (props) => {
  let { data } = props;
  data = CITIES.filter((e) => e.code === "AA");
  console.log(data);
  return <></>;
};

export default Cities;
