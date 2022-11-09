import React from "react";

const Productos = () => {
  return (
    <div className="productos">
      <h2 className="subtitulos">Productos</h2>
      <div>
      <ol className="list-group list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Alfaparf</div>
              </div>
              <span className="badge bg-dark rounded-pill precios">
                $1200
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Evans</div>
              </div>
              <span className="badge bg-dark rounded-pill precios">
                $1000
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Opción</div>
              </div>
              <span className="badge bg-dark rounded-pill precios">
                $800
              </span>
            </li>
          </ol>
    </div>
    </div>
  );
};

export default Productos;
