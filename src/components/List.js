import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ text, id, delTask, darkMode }) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className={darkMode ? "listing" : "listing listing-dm"} id={id}>
      <div className="listing-items">
        <input
          type="checkbox"
          className={
            darkMode ? "checkbox-item" : "checkbox-item checkbox-item-dm"
          }
          name=""
          id={id}
          checked={isCheck}
          onChange={() => {
            setIsCheck(!isCheck);
          }}
        />
        <span style={{ textDecoration: isCheck ? "line-through" : "" }}>
          {text}
        </span>
        <FontAwesomeIcon
          className={darkMode ? "delete-item" : "delete-item delete-item-dm"}
          type="button"
          icon="fa-trash"
          onClick={() => {
            if (isCheck) {
              delTask(id);
              setIsCheck(!isCheck);
            }
          }}
        >
          del
        </FontAwesomeIcon>
      </div>
    </div>
  );
};

export default List;
