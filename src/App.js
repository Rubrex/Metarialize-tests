import React from "react";
import "./App.css";
import Metal from "./components/metarialize";

function App() {
  const style = {
    backgroundColor: "rgba(11,202,000,0.1)",
  };
  return (
    <div className="App">
      <a class="waves-effect waves-light btn" href="#">
        button
      </a>
      <a class="waves-effect waves-light btn " href="#">
        <i class="material-icons left">cloud</i>button
      </a>
      <a class="waves-effect waves-light btn" href="#">
        <i class="material-icons right">cloud</i>button
      </a>
      <a href="#" class="waves-effect waves-teal btn-flat" style={style}>
        RubReX
      </a>
      <Metal />
    </div>
  );
}

export default App;
