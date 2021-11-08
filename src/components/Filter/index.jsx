import React, { useState } from "react";
import store from "../../store/store";
import { filterSuccess } from "../../store/user/userAction";
import CITIES from "../../assets/data/cities.json";

const Filter = () => {
  const [searchValue, setSearchValue] = useState(CITIES);

  const handleOnChange = (e) => {
    if (e.target.value === "") {
      store.dispatch(filterSuccess(CITIES));
    } else {
      store.dispatch(filterSuccess(CITIES.filter((element) => element.code === e.target.value)));
    }

    setSearchValue({ name: e.target.value });
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
    </div>

  );
};

export default Filter;
