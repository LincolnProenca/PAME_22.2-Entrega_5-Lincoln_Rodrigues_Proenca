import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="divisor">
        <div className="esquerda">
          <Link to="/" className="texto-cont">
            <p className="texto">Clínica</p>
            <p className="texto">Pediátrica</p>
          </Link>
        </div>
        <div className="meio">
          <Link to="/agendamento" className="categorias">
            Agendamento
          </Link>
          <Link to="/funcionarios/atendimentos" className="categorias">
            Gerenciamento
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
