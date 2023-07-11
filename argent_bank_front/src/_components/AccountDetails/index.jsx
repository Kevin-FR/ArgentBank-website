import "./style.scss";
import Button, { BUTTON_TYPES } from "../../_components/Button";
import { useDispatch, useSelector } from "react-redux";
import { paramsActions } from "../../_store/params.slice";
import Collapse from "./collapse";
import { useState } from "react";

export const TRANSACTION_TYPE = {
  "ELECTRONIC": "Electronic",
  "CASH": "Cash",
};


export const CATEGORY_NAME = {
  "FOOD": "Food",
  "SCHOOL": "School",
  "CAR": "Car",
  "HOME": "Home",
};

const data = [
  {
    date: "27/02/20",
    description: " Golden Sun Bakery",
    amout: "8.00",
    balance: "298.00",
    transactionType: `${TRANSACTION_TYPE.ELECTRONIC}`,
    category: `${CATEGORY_NAME.FOOD}`,
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: " Golden Sun Bakery",
    amout: "8.00",
    balance: "298.00",
    transactionType: `${TRANSACTION_TYPE.ELECTRONIC}`,
    category: `${CATEGORY_NAME.SCHOOL}`,
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: " Golden Sun Bakery",
    amout: "8.00",
    balance: "298.00",
    transactionType: `${TRANSACTION_TYPE.ELECTRONIC}`,
    category: `${CATEGORY_NAME.CAR}`,
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: " Golden Sun Bakery",
    amout: "8.00",
    balance: "298.00",
    transactionType: `${TRANSACTION_TYPE.ELECTRONIC}`,
    category: `${CATEGORY_NAME.HOME}`,
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: " Golden Sun Bakery",
    amout: "8.00",
    balance: "298.00",
    transactionType: `${TRANSACTION_TYPE.ELECTRONIC}`,
    category:`${CATEGORY_NAME.CAR}`,
    note: "lorem ipsum",
  },
];

function AccountDetails() {
  const dispatch = useDispatch();
  const params = useSelector((x) => x.params.value);
  function ShowNumber(n) {
    return Number(n).toLocaleString("en");
  }

  function handleCancel() {
    return dispatch(paramsActions.clear());
  }


  const [panel, setPanel] = useState(0);

  const handleCollapse = (id) => {
    if(id + 1 === panel){
      setPanel(() => 0);
    }else{
    setPanel(() => id + 1);
    }
  };


  return (
    <main key={`account-detail-${params.account.id}`} className="main bg-dark">
      <div className="account-container">
        <div className="account-detail-header">
          <div className="account-detail-header info">
            <span>
              {params.account.title} (x{params.account.numTransaction})
            </span>
            <span className="font-XL">${ShowNumber(params.account.numMoney)}</span>
            <span className="font-S">{params.account.balanceType}</span>
          </div>
          <div>
            <Button
              type={BUTTON_TYPES.DEFAULT}
              className="account-detail-button"
              onClick={handleCancel}
            >
              <i className="fa-solid fa-xmark"></i>
            </Button>
          </div>
        </div>
        <div className="account-detail-table header" role="table" aria-label="Destinations">
          <div className="account-detail-table flex row" role="rowgroup">
            <div className="account-detail-table item" role="columnheader">
              Date
            </div>
            <div className="account-detail-table item" role="columnheader">
              Description
            </div>
            <div className="account-detail-table item" role="columnheader">
              Amount
            </div>
            <div className="account-detail-table item" role="columnheader">
              Balance
            </div>
            <div className="account-detail-table item" role="columnheader">
              action
            </div>
          </div>

          {data.map((d, id) => (
            <div key={`account-detail-${params.account.id}-${id}`} className="account-detail-table row-container">
            <div className="account-detail-table flex row" role="rowgroup">
              <div className="account-detail-table item" role="cell">
                {d.date}
              </div>
              <div className="account-detail-table item" role="cell">
                {d.description}
              </div>
              <div className="account-detail-table item" role="cell">
                ${d.amout}
              </div>
              <div className="account-detail-table item" role="cell" >
                ${d.balance}
              </div>
              <div className="account-detail-table item cursor" role="cell" onClick={() => handleCollapse(id)}>
              <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            { panel === id + 1
                ? <Collapse id={id} transactionType={d.transactionType} category={d.category}  note={d.note}/>
                : ""
                }
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AccountDetails;
