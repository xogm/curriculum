import { memo } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSelector = () => {
  return (
    <div className="fixed bottom-4 right-4 print-hidden">
      <label className="swap swap-rotate p-4 bg-white text-black rounded-full shadow-lg">
        <input type="checkbox" className="theme-controller" value="light" />
        <FontAwesomeIcon icon={faSun} size="2x" className="swap-on" />
        <FontAwesomeIcon icon={faMoon} size="2x" className="swap-off" />
      </label>
    </div>
  );
};

export default memo(ThemeSelector);
