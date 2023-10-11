import React from "react";

function ChosenPermissions({
  chosenPermission,
  setSelectedPermission,
  setchosenPermission,
}) {
  function handleChosenPermissions(ele) {
    setSelectedPermission((prev) => {
      return [...prev, ele];
    });
  }

  function handRemoveAlll() {
    setchosenPermission([]);
  }

  return (
    <div className="componentWrapper">
      <div className="chPermisionsWrapper">
        <div className="CuvpermissionHeader">Chosen User Permission</div>
        <div className="AvpListWrapper">
          {chosenPermission.map((ele, idx) => (
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
      <button className="buttonSelectAll" onClick={handRemoveAlll}>
        ◀️ Remove All
      </button>
    </div>
  );
}

export default ChosenPermissions;
