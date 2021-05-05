import React from "react";

export const SelectNumberDados = ({setGuardarNumeroDados}) => {
  
  const handleSelectNumberDado =({target}) =>{

setGuardarNumeroDados(target.text)
  }

  return (
    <div className="btn-group">
      <button
        type="button"
        id="dropdownMenuButton1"
        className="btn-group btn ml-2 btn-outline-danger bropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        NUMERO DE DADOS
      </button>
      <ul onClick={handleSelectNumberDado} className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
           1
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
           2
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
           3
          </a>
        </li>
      </ul>
    </div>
  );
};
