import React, { useState } from "react";
import "../Styles/Validacion.css"

const Validacion = () => {
  const [values, setValues] = useState({ user: "", password: "" });

  const handleChange = ({ target }) => {
    setValues((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };
  console.log(values);
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
        <p className="text">Password</p>
        <input
        className="input"
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button className="button">Enviar</button>
      </div>
    </div>
  );
};

export default Validacion;
