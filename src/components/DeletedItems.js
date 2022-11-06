import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeletedItems = ({ text, id, permDelTask, darkMode }) => {
  return (
    <div
      className={darkMode ? "deleted-items" : "deleted-items deleted-items-dm"}
      id={id}
    >
      <div className="listing-del-items">
        <span>{text}</span>
        <FontAwesomeIcon
          icon="fa-square-minus"
          className={darkMode ? "perm-del" : "perm-del perm-del-dm"}
          onClick={() => {
            permDelTask(id);
          }}
        >
          Permanent Delete
        </FontAwesomeIcon>
      </div>
    </div>
  );
};

export default DeletedItems;
