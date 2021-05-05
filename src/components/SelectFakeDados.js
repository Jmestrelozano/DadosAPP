import React from "react";

export const SelectFakeDados = () => {
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
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            6
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            2
          </a>
        </li>
      </ul>
    </div>
  );
};
