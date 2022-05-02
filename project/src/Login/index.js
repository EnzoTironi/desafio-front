import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import LoginService from "../LoginService";
import styles from "./styles.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("guilhermereids@gmail.com");
  const [password, setPassword] = React.useState("123456");

  const handleLogin = React.useCallback(async () => {
    try {
      const result = await LoginService.login({
        body: { email: email, password: password },
      });

      if (!result) {
        return false;
      }

      console.log("logado", email, password);
      return navigate("/user");
    } catch (erro) {
      console.log("LoginService", erro.response.data);
      return false;
    }
  }, [email, navigate, password]);

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />

      <div className={styles.form}>
        <label>Email</label>
        <input
          className={styles.input}
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Senha</label>
        <input
          className={styles.input}
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          disabled={!email || !password}
          className={email && password ? styles.button : styles.buttonDisabled}
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          type="submit"
          value="Login"
        />
      </div>
    </div>
  );
}

export default Login;
