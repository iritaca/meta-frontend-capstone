import React, { useState } from "react";

import Styles from "./Login.module.scss";
import { FormInput } from "../../Components/Form/FormElements";
import Button from "../../Components/Button/Button";

const Login = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };
  // @Dev - fill this function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // @Dev - manage a way of adding data is correct
    const dataIsCorrect = true;
    if (dataIsCorrect) setSubmitSuccess(true);
  };
  const loginIsDisabled = !form.password || !form.username;
  return (
    <div className={Styles.login}>
      <h2 className={Styles.loginTitle}>Login</h2>
      <form onSubmit={handleSubmit} className={Styles.loginForm}>
        <FormInput
          label="Username"
          inputId="username"
          onChange={handleChange}
          value={form.username}
        />
        <FormInput
          label="Password"
          inputId="password"
          type="password"
          onChange={handleChange}
          value={form.password}
        />
        <Button
          type="submit"
          className={Styles.loginButton}
          disabled={loginIsDisabled}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
