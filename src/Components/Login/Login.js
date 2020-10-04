import React, { useState } from "react";
import "./Login.css";

import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error.message));
    console.log(auth);
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error.message));
    console.log(auth);
  };
  return (
    <div className="login">
      <div className="login__left">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
        <h1>
          Facebook helps you connect and share with the people in your life.
        </h1>
      </div>
      <div className="login__right">
        <form>
          <input
            type="text"
            placeholder="Enter your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button" type="submit" onClick={login}>
            Log In
          </button>
          <a href="#">Forgotten Password ?</a>
          <hr />
          <div className="login__register">
            <button type="submit" onClick={register}>
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
