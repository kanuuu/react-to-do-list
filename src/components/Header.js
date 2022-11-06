import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={darkMode ? "header-bar" : "header-bar header-bar-dm"}>
      <h1>
        To Do List <FontAwesomeIcon icon="fa-pen-to-square" />
      </h1>
      <FontAwesomeIcon
        className={darkMode ? "dark-mode" : "dark-mode dark-mode-dm"}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        icon="fa-moon"
      />
    </header>
  );
};

export default Header;
