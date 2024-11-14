function Header() {
  return (
    <>
      <div className="auth-links">
        <a href="#">Jobpreneur ↗</a>
        <a href="#">Skillup ↗</a>
        <a href="#">TechFund ↗</a>
      </div>
      {/* <!-- Header Section --> */}
      <header>
        {/* <!-- Logo Section --> */}
        <div className="logo">✕</div>

        {/* <!-- Navigation Links --> */}
        <nav className="nav-links">
          <a href="#">Explore Services</a>
          <a href="#">Resources</a>
          <a href="#">Community</a>
          <a href="#">About</a>
          <a href="/contact-us">Contact Us</a>
        </nav>

        <div className="login"></div>

        {/* <!-- Authentication and Call-to-Action Links --> */}
      </header>
    </>
  );
}

export default Header;
