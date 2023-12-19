import { Link } from "react-router-dom";

export default function Nav() {

 return( 

<div id="navbar">
  <h1>Hello React Router!</h1>
  <Link to='/'>Home</Link>
  <Link to="/blue">Blue</Link>
  <Link to="/red">Red</Link>
  <Link to= "/purple">Purple</Link>
  <Link to= "/orange">Orange</Link>
  <Nav/>
  </div>
  );
}