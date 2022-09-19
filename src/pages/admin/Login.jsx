import React, { useState } from "react";
import axios from "axios";
import "./login.scss";

const Login = () => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  console.log(user);

  const handleLogin = async (e) => {
    e.preventDefault();
    // window.location.reload(false);
    if (!e.target.checkValidity()) {
      console.log("not send");
    } else {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        user
      );
      console.log(res.data);
    }
  };

  return (
    <div className="login">
      <form className="container">
        <div className="cover">
          <h2>Admin:</h2>
          <input
            type="text"
            placeholder="..."
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Password:</h2>
          <input
            type="text"
            placeholder="*****"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="loginbtn" onClick={handleLogin}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
