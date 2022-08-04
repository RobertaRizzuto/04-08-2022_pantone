
import "./index.css";

// --------------PRIMA MODALITà (PROPS DICHIARATE)
// const Pantone = ({colorHex , colorName}) => {
//   return (
//     <div className="pantone">
//       <div
//         className="pantone-color"
//         style={{ backgroundColor: `${colorHex}` }}
//       ></div>
//       <div className="pantone-info">
//         <h2>PANTONE</h2>
//         <h4>{colorHex}</h4>
//         <h4>{colorName}</h4>
//       </div>
//     </div>
//   );
// };

// --------------SECONDA MODALITà (SPREAD)
// const Pantone = (props) => {
//   return (
//     <div className="pantone">
//       <div
//         className="pantone-color"
//         style={{ backgroundColor: `${props.hex}` }}
//       ></div>
//       <div className="pantone-info">
//         <h2>PANTONE</h2>
//         <h4>{props.hex}</h4>
//         <h4>{props.name}</h4>
//       </div>
//     </div>
//   );
// };

// --------------TERZA MODALITà (CHILDREN E COMPOSITION PATTERN)
const Pantone = (props) => {
  const { name, hex } = props;
  return (
    <div className="pantone">
      <div
        className="pantone-color"
        style={{ backgroundColor: `${hex}` }}
      ></div>
      <div className="pantone-info">
        <h2>PANTONE</h2>
        <h4>{hex}</h4>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Pantone;
