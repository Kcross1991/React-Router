import {Link} from "react-router-dom"

export default funtion Nav() {

 return( 

<div id="navbar">
  <Link to='/'>Home</Link>
  <Link to="/blue">Blue</Link>
  <Link to="/red">Red</Link>
  <Link to= "/purple">Purple</Link>
  <Link to= "/orange">Orange</Link>
  </div>
  
  );
}