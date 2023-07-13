import { useState } from "react";
import { CATEGORY_NAME } from "./index";

// Afficher la selection de catégorie
const EditCategory = (e) => {
  const categories = CATEGORY_NAME;
  const options = Object.entries(categories);
  return (
    <div>
      <select name="category" id="category-select">
        {options.map((o) => (
          <option key={`category-${o[0]}`} value={o[0]}>
            {o[1]}
          </option>
        ))}
      </select>
      <i className="fa-solid fa-check cursor"></i>
    </div>
  );
};

// Afficher un champ note.
const EditNote = (e) => {
  return (
    <div>
      <input type="text" placeholder="Enter your note"></input>
      <i className="fa-solid fa-check cursor"></i>
    </div>
  );
};

// Ouvrir le collapse avec les details de la ligne de compte
function Collapse({ id, transactionType, category, note }) {
  const [edit, setEdit] = useState();
  const handleEdit = (e) => {
    const id = e.currentTarget.id;
    if (id === "account-detail-edit-select") {
      setEdit(() => "editCategory");
    }
    if (id === "account-detail-edit-note") {
      setEdit(() => "editNote");
    }
  };
  return (
    <div key={id} className="account-detail-table collapse">
      <div className="account-detail-table flex row" role="rowgroup">
        <div className="account-detail-table item" role="cell">
          <div>Transaction type:</div>
          <div>Category:</div>
          <div>Note:</div>
        </div>
        <div className="account-detail-table item" role="cell">
          <div>{transactionType}</div>

          {edit === "editCategory" ? (
            <EditCategory />
          ) : (
            <div
              id="account-detail-edit-select"
              onClick={handleEdit}
              className="cursor"
            >
              {category} <i className="fa-solid fa-pencil"></i>
            </div>
          )}
          {edit === "editNote" ? (
            <EditNote />
          ) : (
            <div
              id="account-detail-edit-note"
              onClick={handleEdit}
              className="cursor"
            >
              {note} <i className="fa-solid fa-pencil"></i>
            </div>
          )}
        </div>
        <div className="account-detail-table item" role="cell"></div>
        <div className="account-detail-table item" role="cell"></div>
        <div className="account-detail-table item" role="cell"></div>
      </div>
    </div>
  );
}

export default Collapse;
