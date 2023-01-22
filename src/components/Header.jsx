import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [showFontToggleBox, setShowFontToggleBox] = useState(false);
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const fontTypes = ["Sans Serif", "Serif", "Mono"];

  return (
    <header className="dictionary__header">
      <img src={Logo} alt="Dictionary" />

      <div>
        <div
          onClick={() => setShowFontToggleBox(!showFontToggleBox)}
          className="dictionary__font-toggle"
          role="button"
        >
          <span className="">{currentFont}</span>
          <img src={ArrowDown} alt="arrow down icon" />

          <OutsideClickHandler
            onOutsideClick={() => setShowFontToggleBox(false)}
          >
            <div
              className={
                showFontToggleBox
                  ? "dictionary__font-toggle--box active"
                  : "dictionary__font-toggle--box"
              }
            >
              {fontTypes.map((fontType, index) => (
                <p
                  onClick={() => {
                    setCurrentFont(fontType);
                    setShowFontToggleBox(false);
                  }}
                  key={index}
                >
                  {fontType}
                </p>
              ))}
            </div>
          </OutsideClickHandler>
        </div>

        <div className="dictionary__theme-toggle">
          <div role="button" className="dictionary__theme-toggle--icon">
            <div></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
