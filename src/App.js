import { useState } from "react";
import "./App.css";
import AvailabePermissions from "./Components/AvailabePermissions";
import ChosenPermissions from "./Components/ChosenPermissions";
import { Permission } from "./Data/Persimmions";

function App() {
  const [selectedPermission, setSelectedPermission] = useState([]);
  const [chosenPermission, setchosenPermission] = useState();

  function handleAddPermissions() {
    setchosenPermission((prev) => {
      let existingdata = prev ? [...prev] : [];
      let seleted = [...selectedPermission, ...existingdata];
      setSelectedPermission([]);
      return seleted.filter((item, idx) => seleted.indexOf(item) === idx);
    });
  }

  function handleRemovePermissions() {
    setchosenPermission((prev) => {
      let existingdata = prev ? [...prev] : [];
      setSelectedPermission([]);
      return existingdata.filter((item) => !selectedPermission.includes(item));
    });
  }

  return (
    <div className="App">
      <AvailabePermissions
        Permission={Permission}
        setSelectedPermission={setSelectedPermission}
        selectedPermission={selectedPermission}
        setchosenPermission={setchosenPermission}
      />
      <div className="buttonsWrapper">
        <button className="buttonsStyle" onClick={handleAddPermissions}>
          ➡️
        </button>
        <button className="buttonsStyle" onClick={handleRemovePermissions}>
          ⬅️
        </button>
      </div>
      <ChosenPermissions
        chosenPermission={
          chosenPermission ? chosenPermission : ["NO Permissions Chosen"]
        }
        setSelectedPermission={setSelectedPermission}
        setchosenPermission={setchosenPermission}
      />
    </div>
  );
}

export default App;
