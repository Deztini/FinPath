import { createContext, useState } from "react";

export const BudgetContext = createContext({
  transaction: [],
  setTransaction: () => {}
});

export default function BudgetContextProvider({children}) {
  const [transaction, setTransaction] = useState([]);
  const contextValue = {
    transaction,
    setTransaction
  };
  return <BudgetContext.Provider value={contextValue}>
    {children}
  </BudgetContext.Provider>
}