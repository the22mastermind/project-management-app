import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="Project Management App" className="mr-2" />
            <div>Project Management App</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
