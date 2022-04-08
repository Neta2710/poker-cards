import './App.css';
import {BsFillSuitDiamondFill} from 'react-icons/bs'
import Cards from "./components/Cards"

function App() {
  return (
    <div className="App">
      <h1> <BsFillSuitDiamondFill/> LE DISTRIBUTEUR DE CARTE <BsFillSuitDiamondFill/></h1>
      <Cards/>
    </div>
  );
}

export default App;


