import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import classes from "./Root.module.css";
import logo from "../assets/FinPath.jpg";
import { useNavigate } from "react-router-dom";
import { Moon } from "lucide-react";

export default function RootLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    navigate("/");
  };

  return (
    <>
      <div className={`${classes.layout} `}>
        <Sidebar />
        <div className={classes.content}>
          <div className={classes.container}>
            <header className={classes.header}>
              <img src={logo} alt="Logo" />
              <span>FinPath</span>
            </header>
            <div className={classes.container2}>
              <button onClick={handleLogout} className={classes.logout}>
                Logout
              </button>
            </div>
          </div>

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
