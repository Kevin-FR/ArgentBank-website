import AccountCard, { BALANCE_TYPES } from "../../_components/AccountCard";
import UserHeader from "../../_components/User/header";
import { useSelector } from "react-redux";
import  AccountDetails  from "../../_components/AccountDetails/index";

const data = [
  {
    title: "Argent Bank Checking",
    numTransaction:"8349",
    numMoney:"2082.79",
    balanceType:`${BALANCE_TYPES.AVAILABLE}`,
  },
  {
    title: "Argent Bank Savings",
    numTransaction:"6712",
    numMoney:"10928.42",
    balanceType:`${BALANCE_TYPES.AVAILABLE}`,
  },
  {
    title: "Argent Bank Credit Card",
    numTransaction:"8349",
    numMoney:"184.30",
    balanceType:`${BALANCE_TYPES.CURRENT}`,
  },
]

function MyAccount() {
  const params = useSelector((x) => x.params.value);
  

  if (params?.action === "account_detail") {
    return (
      <AccountDetails />
    );
  } else {
    return (
      <main className="main bg-dark">
        <UserHeader />
        {  data.map((d, id) => ( 
          <AccountCard
          key={`account-card-${id}`}
          id={id}
          title={d.title}
          numTransaction={d.numTransaction}
          numMoney={d.numMoney}
          balanceType={d.balanceType}
        />
        ))}
      </main>
    );
  }
}

export default MyAccount;
