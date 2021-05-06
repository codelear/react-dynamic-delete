import "./App.css";
import PanelForm from "./forms/PanelForm";
import { useState } from "react";
import PanelDisplay from "./PanelDisplay";

function App() {
  const [details, setDetails] = useState([]);

  function detailCreatedHandler(detaildata) {
    setDetails(prevState=>[...prevState,{info: detaildata, id: new Date().getTime()}]);

  }

  function deleteHandler(accessKey)
  {
     const prunedDataset = details.filter(detail=>detail.id!=accessKey)
     setDetails(prevState=>[...prunedDataset]); 
  }

  return (
    <div className="App">
      <h1 className="justify-text-center">Delete Dynamic</h1>
     <PanelForm onDetailsCreated={detailCreatedHandler}></PanelForm>
      <PanelDisplay displayDetails={details} onDelete={deleteHandler}></PanelDisplay> 
    </div>
  );
}

export default App;
