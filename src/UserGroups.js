import React, { useEffect } from "react";
import "./css/UserGroups.scss";
import "./css/Speaker.scss";
import UserGroupsData from "./content/UserGroupsData.json";
// import Group1 from "./images/website/group1.png";
import arrow from "./images/website/Arrow.png";

export const UserGroups = () => {
  let isMobile = window.innerWidth < 768;
  useEffect(() => {}, [isMobile]);

  return (
    <div className="dec2022-user-groups">
      <h1 className="dec2022-user-groups-heading text-center">
        SUPPORTING USER GROUPS
      </h1>
      <div className="dec2022-group-wrapper" style={{ width: "100%" }}>
        {UserGroupsData.map((data) => {
          return (
            <div className="col-xs-12 col-md-12 col-lg-6 dec2022-group-card text-center">
              <a
                href={data.groupUrl}
                target="_blank"
                className="dec2022-group-border row align-items-center"
                rel="noreferrer"
              >
                <div className="col-3 col-xs-2 dec2022-group-img">
                  <img src={`${data.groupImage}`} alt={data.groupAltText} />
                </div>

                <div className="col-8 col-xs-8 dec2022-group-name">
                  <span>{data.groupName}</span>
                </div>
                <div className="col-1 col-xs-2 dec2022-group-arrow">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="dec2022-group-arrow"
                    style={
                      isMobile ? { display: "none" } : { display: "block" }
                    }
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
