import { useState } from "react";
import DeletedItems from "./DeletedItems";
import Search from "./Search";

const ListManager = ({ darkMode }) => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [delItems, setDelItems] = useState([]);
  const [index, setIndex] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValue("");
    setIndex(index + 1);

    const newItems = [...items, { id: index, text: value }];

    setItems(newItems);
  };
  const delTask = (elem) => {
    items.map((item, index) => {
      if (item.id === elem) {
        const newDelItems = [...delItems, { id: index, text: item.text }];
        return setDelItems(newDelItems);
      } else {
        return null;
      }
    });
    setItems(items.filter((item) => item.id !== elem));
  };

  const permDelTask = (elem) => {
    setDelItems(delItems.filter((item) => item.id !== elem));
  };

  return (
    <>
      <Search items={items} delTask={delTask} darkMode={darkMode} />

      <form
        className={darkMode ? "add-items" : "add-items add-items-dm"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={darkMode ? "add-one" : "add-one add-one-dm"}
          placeholder="Go outside"
          onChange={handleChange}
          value={value}
        />
        <button
          className={darkMode ? "add-task" : "add-task add-task-dm"}
          type="submit"
        >
          Add Task
        </button>
      </form>
      <span
        className={darkMode ? "my-del-items" : "my-del-items my-del-items-dm"}
      >
        Deleted
      </span>
      <div
        className={
          darkMode
            ? "del-items-display"
            : "del-items-display del-items-display-dm"
        }
      >
        {delItems.map((item, index) => {
          return (
            <DeletedItems
              text={item.text}
              id={item.id}
              permDelTask={permDelTask}
              key={index}
              darkMode={darkMode}
            />
          );
        })}
      </div>
    </>
  );
};

export default ListManager;
