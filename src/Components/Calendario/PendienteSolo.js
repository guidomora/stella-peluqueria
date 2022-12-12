import React from "react";

const PendienteSolo = ({ texto, id, borrarServicio }) => {
  return (
    <div className="pendientes-container">
      <ol className="list-group ">
        <li className="font-s list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold tamano">{texto}</div>
          </div>
          <span
            className="badge bg-danger eliminar "
            onClick={() => borrarServicio(id)}
          >
            Eliminar
          </span>
        </li>
      </ol>
    </div>
  );
};

export default PendienteSolo;