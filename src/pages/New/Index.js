import React, { useState, useMemo } from "react";
import "./styles.css";
import camera from "../../assets/camera.svg";
import api from "../../services/Axios";

export default function New({ history }) {
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);
    data.append("thumbnail", thumbnail);
    await api.post("/spot", data, {
      headers: { user_id }
    });
    history.push("/dashboard");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        ></input>
        <img src={camera} alt="select img" />
      </label>
      <label htmlFor="company">Empresa *</label>
      <input
        id="company"
        placeholder="Sua empresa"
        value={company}
        onChange={event => setCompany(event.target.value)}
      ></input>
      <label>
        Tecnologias *<span>(Separadas por virgula)</span>
      </label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam ?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      ></input>
      <label>
        Preço *<span>(Vazio caso seja de graça)</span>
      </label>
      <input
        id="price"
        placeholder="Valor cobrado por dia?"
        value={price}
        onChange={event => setPrice(event.target.value)}
      ></input>
      <button className="btn">Cadastrar Novo Spot</button>
    </form>
  );
}
