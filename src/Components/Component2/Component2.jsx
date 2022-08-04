import './index.css';
import Component3 from '../Component3';

// --------------PRIMA MODALITà (PROPS DICHIARATE)
// const Component2 = ( {colorHex , colorName}) => {
// return (<Component3 colorHex={colorHex} colorName={colorName}/>)}


// --------------SECONDA MODALITà (SPREAD)
// const Component2 = (props) => {
// return (<Component3 {...props} />)}


// --------------TERZA MODALITà (CHILDREN E COMPOSITION PATTERN)
const Component2 = ({children}) => {
return (<Component3 >{children}</Component3>)}


export default Component2;