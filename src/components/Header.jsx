import { useContext } from "react";
import { BsJustify, BsSearch } from "react-icons/bs";

import Moon from "../assets/icons/moon.svg";
import Ring from "../assets/icons/ring.svg";
import Sun from "../assets/icons/sun.svg";
import ThemeContext from "../context";

const Header = ({ OpenSidebar }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  // console.log(darkMode);
  const toggleMode = (darkMode) => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right flex text-indigo-400">
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={toggleMode}
              // onClick={() => setDarkMode((darkMode) => !darkMode)}
              href="#"
            >
              <img
                src={darkMode ? Sun : Moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
