import './App.css';
import {Routes,Route} from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Blue from "./components/blue.jsx";
import Red from "./components/red.jsx";
import Purple from "./components/Purple";
import Orange from "./components/Orange";
import Footer from './components/footer.jsx';

function App() {
  return (
    <>
    <div id="container">
      <Nav/>
        </div>
      <div id="main-section">
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blue' element={<Blue/>}></Route>
        <Route path='/red' element={<Red/>}></Route> 
        <Route path='/purple' element={<Purple/>}></Route>
        <Route path='/orange' element={<Orange/>}></Route>
        </Routes>
        </div>
        <div>
        <Footer/>
        </div>
        
    </>
  )
}

export default App;
