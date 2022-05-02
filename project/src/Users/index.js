import React from "react";
import logo from "../assets/logo.png";
import UserService from "../UserService";
import styles from "./styles.module.css";

function Users() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleUser = React.useCallback(async () => {
    try {
      const result = await UserService.user({
        body: {
          name: name,
          email: email,
          phone: phone,
          color: "#ff0000",
          nationality: "Brazilian",
        },
      });

      if (!result) {
        return false;
      }

      return true;
    } catch (erro) {
      console.log("UserService", erro.response.data);
      return false;
    }
  }, []);

  React.useEffect(() => {
    handleUser();
  }, [handleUser]);

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />

      <form className={styles.form}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu email"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Telefone</label>
        <input
          type="text"
          placeholder="Digite sua senha"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite sua senha"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Nacionalidade</label>
        <select>
          <option value="laranja">Laranja</option>
          <option value="limao">Limão</option>
          <option selected value="coco">
            Coco
          </option>
          <option value="manga">Manga</option>
        </select>
      </form>
    </div>
  );
}

export default Users;
