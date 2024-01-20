const Header = () => {
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
