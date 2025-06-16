import { NavLink } from "react-router-dom";
import HomeLogo from "../../assets/HomeImg2.jpg";
import BudgetLogo from "../../assets/BudgetImg.png";
import ForecastLogo from "../../assets/ForecastImg.png";
import GoalLogo from "../../assets/GoalImg.jpg";
import classes from "./Sidebar.module.css";
import { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navItems = [
    { to: "/finapp/dashboard", label: "Dashboard", icon: HomeLogo },
    { to: "/finapp/budget", label: "Budget", icon: BudgetLogo },
    { to: "/finapp/goal", label: "Goals", icon: GoalLogo },
    // { to: "/finapp/forecast", label: "Forecast", icon: ForecastLogo },
  ];

  function displaySidebar() {
    setShowSidebar(prev => !prev);
  }

  return (
    <>
      <div className={classes.toggle} onClick={displaySidebar}>
        <div className={classes.toggleBtn}></div>
        <div className={classes.toggleBtn}></div>
        <div className={classes.toggleBtn}></div>
      </div>
      <div className={`${classes.sidebar} ${showSidebar ? classes.show : ""}`}>
        <ul>
          {navItems.map((item) => (
            <NavLink
              to={item.to}
              key={item.label}
              className={({ isActive }) =>
                `${classes.sidebarItem} ${isActive ? classes.active : ""}`
              }
            >
              <img src={item.icon} alt={`${item.label} icon`} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}
