import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SearchIcon from "../assets/images/icon-search.svg";

const Search = () => {
  const [inputActive, setInputActive] = useState(false);

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setInputActive(false)}>
        <div
          onClick={() => setInputActive(true)}
          className={
            inputActive ? "dictionary__search active" : "dictionary__search"
          }
        >
          <form>
            <input type="text" placeholder="Search for a word" />
            <img src={SearchIcon} alt="search icon" />
          </form>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Search;
