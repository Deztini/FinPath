import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Root";
import Dashboard from "./Pages/Dashboard";
import Budget from "./Pages/Budget";
import Goals from "./Pages/Goals";
import Forecast from "./Pages/Forecast";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import GoalContextProvider from "../store/goal-context";
import BudgetContextProvider from "../store/budget-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/finapp",
    element: <RootLayout />,
    children: [
      {
        path: "/finapp/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/finapp/budget",
        element: (
          <BudgetContextProvider>
            {" "}
            <Budget />
          </BudgetContextProvider>
        ),
      },
      {
        path: "/finapp/goal",
        element: (
          <GoalContextProvider>
            <Goals />
          </GoalContextProvider>
        ),
      },
      { path: "/finapp/forecast", element: <Forecast /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
