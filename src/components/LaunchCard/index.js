import React from "react";
import "./style.css";

const LaunchCard = ({ id, launch }) => {
  return (
    <div key={id} className="card">
      <div className="p-25">
        <div className="launch-icon">
          <img src={launch.links.mission_patch_small} alt="launch-icon" />
        </div>
        <div className="launch-details">
          <div className="launch-name">
            <p>{launch.mission_name + " #" + launch.flight_number}</p>
          </div>
          <div className="launch-ids">
            <p>Mission Ids:</p>
            <ul>
              {launch.mission_id
                ? launch.mission_id.map((id) => <li>{id}</li>)
                : null}
            </ul>
          </div>
          <div className="launch-year">
            <p>Launch Year: {launch.launch_year}</p>
          </div>
          <div className="launch-status">
            <p>Successful Launch: {launch.launch_success ? "true" : "false"}</p>
          </div>
          <div className="launch-land-status">
            <p>Successful Landing: {launch.land_success ? "true" : "false"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
