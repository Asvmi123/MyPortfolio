import React, { useState } from "react";
import "./Login.css";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div id="login-form">
      <div>
        <h1>Login</h1>
        <form onSubmit={handleForm}>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
