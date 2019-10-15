import React, { useState } from "react";
import api from "../../services/Axios";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  async function handleLogin(event) {
    event.preventDefault();
    const response = await api.post("/usuarios", { email });
    const { _id } = response.data;
    localStorage.setItem("user", _id);
    history.push("/dashboard");
  }
  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>
      <form>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu E-MAIL"
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </>
  );
}
