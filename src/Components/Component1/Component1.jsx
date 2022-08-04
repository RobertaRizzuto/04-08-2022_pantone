import './index.css';
import Component2 from '../Component2';

// --------------PRIMA MODALITà (PROPS DICHIARATE)
// const Component1 = ({colorHex , colorName}) => {
// return (<Component2  colorHex={colorHex} colorName={colorName}/>)}


// --------------SECONDA MODALITà (SPREAD)
// const Component1 = (props) => {
//     return (<Component2  {...props}/>)}


// --------------TERZA MODALITà (CHILDREN E COMPOSITION PATTERN)
const Component1 = ({children}) => {
    return (<Component2>{children}</Component2>)}

export default Component1;