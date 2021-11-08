import React, { useState } from "react";

const Filter = () => {
  const [searchValue, setSearchValue] = useState({ name: "", city: "" });
  const handleOnChange = (e) => {
    setSearchValue({ name: e.target.value });
  };
  console.log(searchValue);
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
