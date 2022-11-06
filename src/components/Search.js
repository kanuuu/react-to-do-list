import { useState } from "react";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ items, delTask, darkMode }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="search-bar">
        <div className="search-icon">
          <input
            type="text"
            className={darkMode ? "search" : "search search-dm"}
            placeholder="Type to search a task"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <FontAwesomeIcon
            className={
              darkMode ? "search-glass" : "search-glass search-glass-dm"
            }
            icon="fa-magnifying-glass"
          />
        </div>
      </div>
      <span className={darkMode ? "my-items" : "my-items my-items-dm"}>
        My List
      </span>
      <div
        className={
          darkMode ? "items-display" : "items-display items-display-dm"
        }
      >
        {items.map((item, index) => {
          if (item.text.includes(value)) {
            return (
              <List
                text={item.text}
                id={item.id}
                delTask={delTask}
                key={index}
                darkMode={darkMode}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default Search;
