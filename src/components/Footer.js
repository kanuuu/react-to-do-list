const Footer = ({ darkMode }) => {
  return (
    <footer className="footer-bar">
      <h1
        className={darkMode ? "footer-title" : "footer-title footer-title-dm"}
      >
        Made by kanu
      </h1>
    </footer>
  );
};

export default Footer;
