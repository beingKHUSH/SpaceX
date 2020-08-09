import React from "react";
import "./style.css";

const setParams = (id, val) => {
  const searchParams = new URLSearchParams();
  searchParams.set(id, val || "");
  return searchParams.toString();
};

const FilterBox = ({ filter: { id, filter, values }, history }) => {
  const updateURL = (e, id) => {
    const url = setParams(id, e.target.value);
    history.push(`?${url}`);
  };
  return (
    <div key={id}>
      <p className="filter-header">{filter}</p>
      <div className="filter-values">
        {values &&
          values.map((value) => (
            <input
              type="button"
              className="btn"
              value={value}
              onClick={(e) => updateURL(e, id)}
            />
          ))}
      </div>
    </div>
  );
};

export default FilterBox;
