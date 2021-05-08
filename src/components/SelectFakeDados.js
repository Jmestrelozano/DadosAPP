import React from "react";

export const SelectFakeDados = ({setGuardarRuta}) => {

  const handleFakeDados =(rutaId)=>{
    setGuardarRuta(rutaId)
  }
  return (
    <div className="btn-group">
      <button
        type="button"
        id="dropdownMenuButton1"
        className="btn-group btn ml-2 btn-outline-success bropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        NUMERO DE CARAS
      </button>
      <ul onClick={(e)=>handleFakeDados(e.target.id)} className="dropdown-menu">
        <li>
          <a id="6caras" className="dropdown-item" href="#">
            6 caras
          </a>
        </li>
        <li>
          <a id="4caras" className="dropdown-item" href="#">
            4 caras
          </a>
        </li>
      </ul>
    </div>
  );
};
