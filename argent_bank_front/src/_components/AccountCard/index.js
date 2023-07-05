/* istanbul ignore file */
import PropTypes from "prop-types";
import "./style.scss";
import Button, { BUTTON_TYPES } from "../Button";

export const BALANCE_TYPES = {
    AVAILABLE: "Available Balance",
    CURRENT: "Current Balance",
  };


function ShowNumber(n){
    return Number(n).toLocaleString('en');
}

const AccountCard = ({ title, numTransaction, numMoney, balanceType }) => (
    <section className="account">
        <div className="account-content-wrapper">
        <h3 className="account-title">{title} (x{numTransaction})</h3>
        <p className="account-amount">${ShowNumber(numMoney)}</p>
        <p className="account-amount-description">{balanceType}</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button type={BUTTON_TYPES.DEFAULT} className="account-button">View transactions</Button>
        </div>
  </section>
);

AccountCard.propTypes = {
    title: PropTypes.string,
    balanceType: PropTypes.oneOf(Object.values(BALANCE_TYPES)),
};
AccountCard.defaultProps = {
    title: "Title",
};

export default AccountCard;
