import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  const [user, setUser] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  return (
    <div className="login">
      <form className="container">
        <div className="cover">
          <h2>Admin Name:</h2>
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
