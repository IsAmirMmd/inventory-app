import { useState } from "react";

const FilterProduct = ({ products, setFilteredProduct }) => {
  const searchHandler = ({ target }) => {
    const filteredWord = target.value.toLowerCase();
    setFilteredProduct(
      products.filter((product) =>
        product.title.toLowerCase().includes(filteredWord)
      )
    );
  };

  return (
    <>
      <div id="SearchBox" className="flex justify-between items-baseline mb-4">
        <span className="text-slate-300"> Search </span>
        <input
          type="text"
          id="SearchInput"
          className="bg-transparent rounded-md p-1 border border-slate-500 outline-0 text-slate-300"
          name="SearchInput"
          onChange={searchHandler}
        />
      </div>
      <div id="SortBox" className="flex justify-between items-baseline mb-4">
        <span className="text-slate-300"> Sort by </span>
        <select
          className="bg-transparent text-xs rounded-md pl-2 border border-slate-500 outline-0 text-slate-300"
          name="sortBy"
          id="SortBy"
        >
          <option
            className="text-slate-700 bg-slate-200"
            defaultValue={true}
            value="1"
          >
            newest
          </option>
          <option className="text-slate-700 bg-slate-200" value="2">
            oldest
          </option>
        </select>
      </div>
    </>
  );
};

export default FilterProduct;
