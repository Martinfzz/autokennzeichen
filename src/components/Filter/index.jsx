import React, { useEffect, useState } from "react";
import Select from "react-select";
import store from "../../store/store";
import { filterSuccess } from "../../store/user/userAction";
import CITIES from "../../assets/data/cities.json";

const options = [
  { value: "Baden-Württemberg", label: "Baden-Württemberg" },
  { value: "Bayern", label: "Bayern" },
  { value: "Berlin", label: "Berlin" },
  { value: "Brandenburg", label: "Brandenburg" },
  { value: "Bremen", label: "Bremen" },
  { value: "Hamburg", label: "Hamburg" },
  { value: "Hessen", label: "Hessen" },
  { value: "Mecklenburg-Vorpommern", label: "Mecklenburg-Vorpommern" },
  { value: "Niedersachsen", label: "Niedersachsen" },
  { value: "Nordrhein-Westfalen", label: "Nordrhein-Westfalen" },
  { value: "Rheinland-Pfalz", label: "Rheinland-Pfalz" },
  { value: "Saarland", label: "Saarland" },
  { value: "Sachsen", label: "Sachsen" },
  { value: "Saxe-Anhalt", label: "Sachsen-Anhalt" },
  { value: "Schleswig-Holstein", label: "Schleswig-Holstein" },
  { value: "Thüringen", label: "Thüringen" },

];

const Filter = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchLaender, setSearchLaender] = useState([]);

  useEffect(() => {
    if (searchValue !== "" && searchLaender.length !== 0) {
      const filteredCities = searchLaender.map((element) => CITIES.filter(
        (n) => n.laender.includes(element.value) && n.code === searchValue,
      )).flat(1);
      store.dispatch(filterSuccess(filteredCities));
    } else if (searchValue === "" && searchLaender.length !== 0) {
      const filteredCities = searchLaender.map((element) => CITIES.filter(
        (n) => n.laender.includes(element.value),
      )).flat(1);
      store.dispatch(filterSuccess(filteredCities));
    } else if (searchValue !== "" && searchLaender.length === 0) {
      const filteredCities = CITIES.filter(
        (element) => element.code === searchValue,
      );
      store.dispatch(filterSuccess(filteredCities));
    } else {
      store.dispatch(filterSuccess(CITIES));
    }
  }, [searchValue, searchLaender]);

  // if (e.length === 0) {
  //   setSearchLaender
  // } else {
  //   const filteredLaender = e.map((element) => searchValue.filter(
  //     (n) => n.laender.includes(element.value),
  //   )).flat(1);
  //   console.log(filteredLaender);
  //   store.dispatch(filterSuccess(filteredLaender));
  // }

  const handleOnChange = (e) => {
    if (e.target.value === "") {
      setSearchValue("");
    } else {
      setSearchValue(e.target.value.toUpperCase());
    }
  };

  const handleOnChangeLaender = (e) => {
    if (e.length === 0) {
      setSearchLaender([]);
    } else {
      setSearchLaender(e);
    }
  };

  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search"
          value={searchValue.name}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <Select
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(e) => handleOnChangeLaender(e)}
      />
    </div>

  );
};

export default Filter;
