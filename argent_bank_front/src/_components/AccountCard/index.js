/* istanbul ignore file */
import PropTypes from "prop-types";
import "./style.scss";
import Button, { BUTTON_TYPES } from "../Button";
import { useDispatch } from "react-redux";
import { paramsActions } from "../../_store/params.slice";



export const BALANCE_TYPES = {
  AVAILABLE: "Available Balance",
  CURRENT: "Current Balance",
};

function ShowNumber(n) {
  return Number(n).toLocaleString("en");
}

function AccountCard({ id, title, numTransaction, numMoney, balanceType}) {
  const dispatch = useDispatch();

 const handleDetails = () => {
    return dispatch(
      paramsActions.store({
        action: "account_detail",
        account: { id, title, numTransaction, numMoney, balanceType},
      })
    );
  }

  return (
    <section key={`account-card-${id}`} className="account container">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title} (x{numTransaction})
        </h3>
        <p className="account-amount">${ShowNumber(numMoney)}</p>
        <p className="account-amount-description">{balanceType}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          type={BUTTON_TYPES.DEFAULT}
          className="account-button"
          onClick={handleDetails}
        >
          View transactions
        </Button>
      </div>
    </section>
  );
}

AccountCard.propTypes = {
  title: PropTypes.string,
  balanceType: PropTypes.oneOf(Object.values(BALANCE_TYPES)),
};
AccountCard.defaultProps = {
  title: "Title",
};

export default AccountCard;
