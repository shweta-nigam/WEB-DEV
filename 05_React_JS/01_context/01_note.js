// 19th sep 2025

// 🍕 Pizza Party Analogy

// Imagine you’re hosting a pizza party 🍕.
// You (the host) order a big pizza (that’s your state, e.g. budget).
// Instead of cutting slices for each guest separately (prop drilling 🤯), you put the pizza in the center of the table so everyone can grab from it (that’s Context).
// Whoever comes to the party (a component) can take a slice using useContext.

// Code Explained
import { createContext, useContext, useState } from "react";

// Step 1: Make a pizza table (Context box)
export const BudgetContext = createContext(undefined);

// Step 2: Host the pizza party (Provider)
export function BudgetProvider({ children }) {
  const [budget, setBudget] = useState(null);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children} {/* all the guests around the table */}
    </BudgetContext.Provider>
  );
}

// Step 3: Guests grab pizza (custom hook)
export default function useBudget() {
  const context = useContext(BudgetContext);

  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }

  return context; // give them the pizza slice
}

// 🚀 How You’d Use It
// App.jsx
import { BudgetProvider } from "./BudgetContext";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <BudgetProvider>
      <Dashboard /> {/* children enjoying pizza */}
    </BudgetProvider>
  );
}

// Dashboard.jsx
import useBudget from "./BudgetContext";

export default function Dashboard() {
  const { budget, setBudget } = useBudget();

  return (
    <div>
      <h2>Budget: {budget}</h2>
      <button onClick={() => setBudget(5000)}>Set Budget</button>
    </div>
  );
}


// ✅ createContext → makes the pizza table
// ✅ Provider → puts the pizza (state) on the table
// ✅ useContext → guests grab their slice
// ✅ children → the guests sitting around the table