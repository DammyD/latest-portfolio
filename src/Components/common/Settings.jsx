import React, { useState, useEffect } from "react";
import { AiOutlineSetting } from "react-icons/ai";

// eslint-disable-next line react/props-types
const Settings = ({colorTheme, setColorTheme}) => {
  // state
  // const [colorTheme, setColorTheme] = useState("theme-white");
  const [selectColor, setSelectColor] = useState(false);

  // effect
  useEffect(() => {
    // check for selected theme in the localstorage
    const currentThemeColor = localStorage.getItem("theme-color");
    // if found set selected theme color in the state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  // set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <>
      <div className={`settings ${colorTheme}`}>
        <div
          className={`theme-switcher ${selectColor && "theme-switcher--open"}`}
        >
          <button
            onClick={() => setSelectColor((prevState) => !prevState)}
            className="bg-white px-2" title="Select Theme"
          >
            <AiOutlineSetting size="25px" className="spin" />
          </button>
          {/* <h1 className="heading">Select Color</h1> */}
          <div className="theme-settings">
            <div
              id="theme-white"
              onClick={() => handleClick("theme-white")}
              className={`${colorTheme === "theme-white" ? "active" : ""}`}
            ></div>
            <div
              id="theme-blue"
              onClick={() => handleClick("theme-blue")}
              className={`${colorTheme === "theme-blue" ? "active" : ""}`}
            ></div>
            <div
              id="theme-orange"
              onClick={() => handleClick("theme-orange")}
              className={`${colorTheme === "theme-orange" ? "active" : ""}`}
            ></div>
            <div
              id="theme-purple"
              onClick={() => handleClick("theme-purple")}
              className={`${colorTheme === "theme-purple" ? "active" : ""}`}
            ></div>
            <div
              id="theme-green"
              onClick={() => handleClick("theme-green")}
              className={`${colorTheme === "theme-green" ? "active" : ""}`}
            ></div>
            <div
              id="theme-black"
              onClick={() => handleClick("theme-black")}
              className={`${colorTheme === "theme-black" ? "active" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
