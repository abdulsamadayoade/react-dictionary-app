import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SearchIcon from "../assets/images/icon-search.svg";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [borderColor, setBorderColor] = useState("transparent");

  const handleSearch = (e) => {
    e.preventDefault();

    if (e.keyCode === 13) {
      setSearchTerm(e.target.value);
    }

    if (e.target.value === "") {
      setBorderColor("red");
      setErrorMsg(true);
    } else {
      setBorderColor("transparent");
      setErrorMsg(false);
    }
  };

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setBorderColor("transparent")}>
        <div
          onClick={() => setBorderColor("hsl(274, 82%, 60%)")}
          style={{
            border: `1px solid ${borderColor}`,
          }}
          className="dictionary__search"
        >
          <input
            type="text"
            placeholder="Search for a word"
            onKeyUp={handleSearch}
          />
          <img
            style={{
              cursor: "pointer",
            }}
            src={SearchIcon}
            alt="search icon"
          />
        </div>
        {errorMsg ? (
          <p className="error-msg">Whoops, can't be empty...</p>
        ) : null}
      </OutsideClickHandler>
    </>
  );
};

export default Search;
