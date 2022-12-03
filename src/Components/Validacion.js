import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Validacion.css";

const Validacion = () => {
  const [values, setValues] = useState({ user: "", password: "" });
  const usuario = "tobi";
  const contra = "stella99";

  const handleChange = ({ target }) => {
    setValues((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };
  return (
    <div className="container">
      <div className="form-container">
        <p className="text">User</p>
        <input
          className="input"
          type="text"
          name="user"
          value={values.user || ""}
          onChange={handleChange}
        />
        <p className="password">Password </p>
        <input
          className="input"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {values.user === usuario && values.password === contra ? (
          <button className="button"><Link to={"/calculador"} className="ingreso">Ingresar</Link></button>
        ) : null}
      </div>
    </div>
  );
};

export default Validacion;
