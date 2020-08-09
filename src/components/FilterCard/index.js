import React from "react";
import FilterBox from "../FilterBox";
import "./style.css";

const FilterCard = ({ years, history }) => {
  const filters = [
    {
      id: "launch_year",
      filter: "Launch Year",
      values: years,
    },
    {
      id: "launch_success",
      filter: "Successful Launch",
      values: ["True", "False"],
    },
    {
      id: "launch_landing",
      filter: "Successful Landing",
      values: ["True", "False"],
    },
  ];
  return (
    <div className="card pb-25">
      <h2>Filters</h2>
      <div className="px-25">
        {filters.map((filter) => (
          <FilterBox filter={filter} history={history} />
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
