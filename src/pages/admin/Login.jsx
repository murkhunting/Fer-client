import React, { useContext, useState } from "react";
import { login } from "../../context/auth/apiCall";
import { AuthContext } from "../../context/auth/AuthContext";
import "./login.scss";

const Login = () => {
  const [user, setUser] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  //para coger los datos que se van introduciendo en los inputs
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  console.log(user);

  //funcion que realiza el login
  const handleLogin = (e) => {
    // window.location.reload(false);
    e.preventDefault();
    login(user, dispatch);
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
        <button
          className="loginbtn"
          onClick={handleLogin}
          disabled={isFetching}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
