import "./App.css";
import ListManager from "./components/ListManager";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faMoon,
  faPenToSquare,
  faMagnifyingGlass,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faMoon, faPenToSquare, faMagnifyingGlass, faSquareMinus);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "App" : "App app-dm"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <ListManager darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
