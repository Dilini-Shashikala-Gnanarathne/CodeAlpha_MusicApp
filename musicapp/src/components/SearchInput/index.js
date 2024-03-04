import { searchIconGrey } from "../../assets";
import "./style.css";

const SearchInput = (props) => {
  return (
    <div className="search-input-container flex">
      <img src={searchIconGrey} />
      <input placeholder="Search" />
    </div>
  );
};

export default SearchInput;
