/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import Select from "react-select";
// import { Switch } from "antd";
import Switch from "react-switch";
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
  const [buttonCodeChecked, setButtonCodeChecked] = useState(true);
  const [buttonCityChecked, setButtonCityChecked] = useState(false);

  const filtered = (target) => {
    if (searchValue !== "" && searchLaender.length !== 0) {
      const filteredCities = searchLaender.map((element) => CITIES.filter(
        (n) => n.laender.includes(element.value) && n[`${target}`].toLowerCase() === searchValue.toLowerCase(),
      )).flat(1);
      store.dispatch(filterSuccess(filteredCities));
    } else if (searchValue === "" && searchLaender.length !== 0) {
      const filteredCities = searchLaender.map((element) => CITIES.filter(
        (n) => n.laender.includes(element.value),
      )).flat(1);
      store.dispatch(filterSuccess(filteredCities));
    } else if (searchValue !== "" && searchLaender.length === 0) {
      const filteredCities = CITIES.filter(
        (element) => element[`${target}`].toLowerCase() === searchValue.toLowerCase(),
      );
      store.dispatch(filterSuccess(filteredCities));
    } else {
      store.dispatch(filterSuccess(CITIES));
    }
  };

  useEffect(() => {
    if (buttonCodeChecked) {
      filtered("code");
    } else if (buttonCityChecked) {
      filtered("city");
    }
  }, [searchValue, searchLaender, buttonCodeChecked, buttonCityChecked]);

  const handleOnChangeCity = (e) => {
    if (e.target.value === "") {
      setSearchValue("");
    } else {
      setSearchValue(e.target.value);
    }
  };

  const handleOnChangeLaender = (e) => {
    if (e.length === 0) {
      setSearchLaender([]);
    } else {
      setSearchLaender(e);
    }
  };

  const handleOnChangeCodeRadio = (checked) => {
    setButtonCodeChecked(checked);
    setButtonCityChecked(!checked);
  };

  const handleOnChangeCityRadio = (checked) => {
    setButtonCodeChecked(!checked);
    setButtonCityChecked(checked);
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
          onChange={(e) => handleOnChangeCity(e)}
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
      <label>
        <span>Code</span>
        <Switch onChange={handleOnChangeCodeRadio} checked={buttonCodeChecked} />
      </label>
      <label>
        <span>City</span>
        <Switch onChange={handleOnChangeCityRadio} checked={buttonCityChecked} />
      </label>
    </div>

  );
};

export default Filter;
