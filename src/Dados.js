import "./App.css";
import { Footer } from "./components/Footer";
import { ViewSumTotal } from "./components/ViewSumTotal";
import { SelectNumberDados } from "./components/SelectNumberDados";
import { SelectFakeDados } from "./components/SelectFakeDados";
import React, { useState } from "react";
import { TemplateDados } from "./components/TemplateDados";

function App() {
  const [VerDado, setLanzar] = useState(0);
  const [Count, setCount] = useState(0);
  const [ObtenerNumeroDados, setGuardarNumeroDados] = useState(1);
  const [obtenerRutaId, setGuardarRuta] = useState("6caras");

  const handleRamdomDados = () => {
    const ramdon = Math.floor(Math.random() * 6 + 1);
    return ramdon;
  };

  const lanzarDados = () => {
    setLanzar(handleRamdomDados());
  };

  const sonidoLoop = () => {
    let sonido = new Audio();
    sonido.src = "../assets/audio/dados.mp3";
    sonido.play();
  };

  return (
    <div className="App">
      <nav className="navbar bg-dark text-white">
        <div className="d-flex gap-2" style={{ paddingLeft: ".7rem" }}>
          <SelectNumberDados setGuardarNumeroDados={setGuardarNumeroDados} />
          <SelectFakeDados setGuardarRuta={setGuardarRuta} />
        </div>
      </nav>


      <div style={{ height: "82.4vh" }} className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 ">
            <h3>LANZAMIENTO DE DADOS</h3>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          {Array.from({ length: Number(ObtenerNumeroDados) }).map(
            (ele, index) => {
              return (
                <TemplateDados
                  key={index}
                  prop={VerDado}
                  ruta={obtenerRutaId}
                  setCount={setCount}
                  ramdon={handleRamdomDados()}
                />
              );
            }
          )}
        </div>

        {Number(ObtenerNumeroDados) === 1 && (
          <ViewSumTotal ResultValue={Count} />
        )}

        <div>
          <div className="row justify-content-center text-center my-4">
            <button
              onClick={() => {
                lanzarDados();
                sonidoLoop();
              }}
              className="btn btn-success "
            >
              LANZAR DADOS
            </button>
          </div>
        </div>
      </div>


      <Footer />

    </div>
  );
}

export default App;
