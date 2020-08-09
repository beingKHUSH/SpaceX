import React from "react";
import FilterCard from "../FilterCard";
import LaunchCard from "../LaunchCard";

const MainPage = (props) => {
  const {
    year,
    launch_success,
    land_success,
    history,
    years,
    launches,
    loading,
  } = props;
  return (
    <div className="app">
      <div className="app-header">
        <h1>SpaceX Launch Programs</h1>
      </div>

      {!loading ? (
        <div className="app-body">
          <div className="app-filter">
            <FilterCard years={years} history={history} />
          </div>
          <div className="app-details">
            {launches.map((launch) => {
              return <LaunchCard id={launch.flight_number} launch={launch} />;
            })}
          </div>
        </div>
      ) : (
        <div className="app-loader">Loading.....</div>
      )}
    </div>
  );
};

export default MainPage;
