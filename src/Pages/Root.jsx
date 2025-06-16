import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import classes from "./Root.module.css";
import logo from "../assets/FinPath.jpg";

export default function RootLayout() {
  return (
    <>
      <div className={classes.layout}>
        <Sidebar />
        <div className={classes.content}>
        <header className={classes.header}>
          <img src={logo} alt="Logo" />
          <span>FinPath</span>
        </header>
        <main>
          <Outlet />
        </main>
          </div>
      </div>
    </>
  );
}
