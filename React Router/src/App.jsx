import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Blue from './components/blue.jsx'
import Red from './components/red.jsx'

function App() {
  

  return (
    <>
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to='/'>Blue</Link>
        <Link to='/'> Red</Link>
        <Link to='/'>Home</Link></div>
      <div id="main-section">
        <Routes>
        <Route path="/blue" Blue={<h1>Blue</h1>} />
        <Route path="/red" Red={<h1>Red</h1>} /> 
        <Route path="/home" Home={<h1>Home</h1>} />
        </Routes>
          </div>
    </div>
       
    </>
  );
}

export default App
