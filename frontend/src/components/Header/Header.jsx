import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";

// const Header = () => {
//   return (
//     <div className="navbar mb-4 px-0 py-4 bg-main">
//       <div className="container">
//         <a className="navbar-brand" href="/">
//           <div className="d-flex">
//             <img src={logo} alt="Project Management App" className="mr-2" />
//             <div>Project Management App</div>
//           </div>
//         </a>
//         <div className="ms-auto">
//           <Button label={`Start now`} target={`dashboard`} />
//         </div>
//       </div>
//     </div>
//   );
// };
const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="container pt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-main">
        <a className="navbar-brand" href="/">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Project Management App"
              className="mr-2"
              height={60}
            />
            <div className="logo-text accent">Projax</div>
          </div>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {pathname.includes("dashboard") ? null : (
              <li className="nav-item">
                <Button label={`Start now`} target={`dashboard`} />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
