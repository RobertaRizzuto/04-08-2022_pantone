import "./App.css";
import Component1 from "./Components/Component1";
import Pantone from "./Components/Pantone";


const color = { hex: "#6667ab", name: "Very Peri" };


function App() {
  return (
    <div className="App">
      {/* --------------PRIMA MODALITà (PROPS DICHIARATE) */}
      {/* <Component1 colorHex={color.hex} colorName={color.name}/> */}

      {/* --------------SECONDA MODALITà (SPREAD) */}
      {/* <Component1 {...color}/> */}

      {/* --------------TERZA MODALITà (CHILDREN E COMPOSITION PATTERN) */}
      <Component1><Pantone {...color}/></Component1>
    </div>
  );
}

export default App;
