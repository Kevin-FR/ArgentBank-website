import AccountCard, { BALANCE_TYPES } from "../../_components/AccountCard";
import UserHeader from "../../_components/User/header";
import "./style.scss";



function MyAccount() {
    return (
        <main className="main bg-dark">
          <UserHeader />
          <AccountCard
            title="Argent Bank Checking"
            numTransaction="8349"
            numMoney="2082.79"
            balanceType={BALANCE_TYPES.AVAILABLE}
          />
          <AccountCard
            title="Argent Bank Savings"
            numTransaction="6712"
            numMoney="10928.42"
            balanceType={BALANCE_TYPES.AVAILABLE}
          />
          <AccountCard
            title="Argent Bank Credit Card"
            numTransaction="8349"
            numMoney="184.30"
            balanceType={BALANCE_TYPES.CURRENT}
          />
        </main>
      );
   
  
}

export default MyAccount;
