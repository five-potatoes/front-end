import "../styles/Header.css";
const Header = () => {
  return (
    <header id="header" className="header">
      <div className="head_contents">
        <nav className="navigation left-nav">
          <a href="/" className="logo ">
            <img src="logo.png" alt="logo" width={100} />
          </a>
          <a href="/trans_sign" className="sign margin-left">
            수화 번역
          </a>
          <div>
            <button className=""></button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
