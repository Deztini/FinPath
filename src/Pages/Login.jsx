import classes from "./Login.module.css";
import logo from "../assets/FinPath.jpg";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { hasMinLength, isEmail, isNotEmpty } from "../../utils/validation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (!isNotEmpty(email) && !isNotEmpty(password)) {
      toast.error("Fill the required fields");
      return;
    }

    if (!hasMinLength(password, 6)) {
      toast.error(
        "Password does not meet the required length, it should be at least 6 characters long."
      );
      return;
    }

    if (!isEmail(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.name);

      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/finapp/dashboard");
      }, 3000);
    } else {
      // alert(data.message || "Login failed");
      toast.error(data.message || "Login failed");
    }
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <div className={classes.container}>
        <div className={classes.login}>
          <div className={classes.logo}>
            <img src={logo} alt="" />
          </div>

          <h1 className={classes.title}>Welcome to FinPath!</h1>
          <p className={classes.subtitle}>
            Your journey to smarter finances starts here!
          </p>

          <form onSubmit={handleLogin}>
            <div className={classes.column}>
              <label>Email</label>
              <input
                type="email"
                required
                className={classes.input}
                placeholder="JohnDoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={classes.column}>
              <label>Password</label>
              <input
                type="password"
                required
                className={classes.input}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={classes.btnContainer}>
              <button className={classes.button}>Login</button>
            </div>

            <div className={classes.line}></div>

            <p style={{ textAlign: "center", color: "#878787" }}>
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{ color: "#6c63ff", textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
