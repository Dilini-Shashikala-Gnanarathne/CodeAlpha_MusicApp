import { logo,searchIcon } from "../../assets";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
        <img src={logo} alt="Dil" />
      </div>
      <div>
        <img src={searchIcon} alt="Search" />
      </div>
    </header>
  );
};

export default Header;