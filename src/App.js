import './App.css';
import {HashRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Topcontainer } from './components/Topcontainer';
import { Extreme } from './components/Extreme';


function open_nav(){
  document.getElementById("floating_navbar").style.width="275px";
}


function App() {
  return (
    <Router>
      <>
        <button onClick={open_nav} className='open_nav'>
          <span className='Menu'>MENU</span>
          <span className='Menu_after'>&#9776;</span>
        </button>
      

        <Extreme/>
        <Topcontainer/>


        <Routes>
        </Routes>

      </>
    </Router>
  );
}

export default App;
