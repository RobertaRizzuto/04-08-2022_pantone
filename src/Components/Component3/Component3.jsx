import Pantone from "../Pantone";
import "./index.css";

// --------------PRIMA MODALITà (PROPS DICHIARATE)
// const Component3 = ({colorHex , colorName}) => {
// return (<Pantone colorHex={colorHex} colorName={colorName}/>)}

// --------------SECONDA MODALITà (SPREAD)
// const Component3 = (props) => {
//     return (<Pantone  {...props}/>)}


// --------------TERZA MODALITà (CHILDREN E COMPOSITION PATTERN)
const Component3 = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Component3;
