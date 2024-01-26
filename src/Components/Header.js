import { useState, useEffect } from "react";

const Header = () => {
  const[btnNameReact,setbtnNameReact] = useState("login");
  
    
  return (
    <header className='header'>
      {/* Logo container */}
      <div className='logo-container'>
        <h1 className='logo'>
          LOGO
        </h1>
      </div>

      {/* Navigation items */}
      <div className='nav-items'>
        <ul>
          {/* List of navigation items */}
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={() =>{
              btnNameReact === "login" ?  setbtnNameReact("logout") : setbtnNameReact("login") ;
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
