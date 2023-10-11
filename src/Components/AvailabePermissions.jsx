import React from "react";
import { Permission } from "../Data/Persimmions";

function AvailabePermissions({
  Permission,
  setSelectedPermission,
  selectedPermission,
  setchosenPermission,
}) {
  function handleChosenPermissions(ele) {
    setSelectedPermission((prev) => {
      return [...prev, ele];
    });
  }

  function SelectAll() {
    setchosenPermission(Permission);
  }

  return (
    <div className="componentWrapper">
      <div className="avPermisionsWrapper">
        <div className="AvpermissionHeader">Availeble Permissions</div>
        <div className="AvpListWrapper">
          {Permission.map((ele, idx) => (
            <div
              className="AvpListItem"
              onClick={() => handleChosenPermissions(ele)}
              key={idx}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
      <button onClick={SelectAll} className="buttonSelectAll">
        Choose All ▶️
      </button>
    </div>
  );
}

export default AvailabePermissions;
