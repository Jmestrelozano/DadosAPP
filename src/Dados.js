import "./App.css";
import { Footer } from "./components/Footer";
import { ViewSumTotal } from "./components/ViewSumTotal";
import { SelectNumberDados } from "./components/SelectNumberDados";
import { SelectFakeDados } from "./components/SelectFakeDados";
import { dataImageDados } from "./json/data";
import { useEffect, useState } from "react";

function App() {
  const [Dato, setDato] = useState([]);
  const [ResultValue, setResultValue] = useState(0);
  const [dadosSinRepetir, GuardarDadosArray] = useState([]);
  const [ObtenerNumeroDados, setGuardarNumeroDados] = useState("");
  const cambiarDadoAleatoriamente = (i) => {
    i =
      (i + Math.floor(Math.random() * (dataImageDados.length - 1) + 1)) %
      dataImageDados.length;
    setDato(dataImageDados[i][1]);
    setResultValue(i + 1);
  };

  const handleRamdomDados = () => {
    const ramdon = Math.floor(Math.random() * 6);
    const a = Math.floor(Math.random() * (6 - 1)) + 1;

    let v = Math.floor(Math.random() * 6 - 1);

    cambiarDadoAleatoriamente(v);
  };

  useEffect(() => {
    handleRamdomDados();
  }, []);

  const drawDados = () => {
    switch (Number(ObtenerNumeroDados)) {
      case 1:
        console.log("creame un dado");
        return (
          <div className="row">
            <div className="col-12 text-center">
              <img src={`${Dato}`} className="dado" id="ImgDado1" />
            </div>
          </div>
        );
        break;
      case 2:
        console.log("creame dos dados");
        return (
          <div className="row">
            <div className="col-6 text-center">
              <img src={`${Dato}`} className="dado" id="ImgDado1" />
            </div>

            <div className="col-6 text-center">
              <img src={`${Dato}`} className="dado" id="ImgDado1" />
            </div>
          </div>
        );
        break;
      case 3:
        console.log("creame tres dados");
        console.log("valor", ResultValue);
        return (
          <div className="row">
            <div className="col-4 text-center">
              <img src={`${Dato}`} className="dado" id="ImgDado1" />
            </div>

            <div className="col-4 text-center">
              <img src={`${Dato}`} className="dado" id="ImgDado1" />
            </div>

            <div className="col-4 text-center">
              <img src={`${Dato}`} className="dado" id="ImgDado1" />
            </div>
          </div>
        );
        break;
      default:
        return (
          <div className="row">
            <div className="col-12 text-center">
              <img src={`${Dato}`} className="dado" id="ImgDado1" />
            </div>
          </div>
        );
        break;
    }
  };

  return (
    <div className="App">
      <nav className="navbar bg-dark text-white">
        <div className="d-flex gap-2" style={{ paddingLeft: ".7rem" }}>
          <SelectNumberDados setGuardarNumeroDados={setGuardarNumeroDados} />
          <SelectFakeDados />
        </div>
      </nav>

      {/* <!-- CONTENIDO PRINCIPAL --> */}
      <div style={{ height: "82.4vh" }} className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 ">
            <h3>LANZAMIENTO DE DADOS</h3>
          </div>
        </div>

        {drawDados()}

        <ViewSumTotal ResultValue={ResultValue} />

        <div className="row justify-content-center text-center my-4">
          <button onClick={handleRamdomDados} className="btn btn-success">
            LANZAR DADOS
          </button>
        </div>
      </div>
      {/* <!-- FIN DEL CONTENIDO PRINCIPAL --> */}

      {/* <!-- INICIO DEL FOOTER --> */}
      <Footer />
      {/* <!-- FIN  DEL FOOTER --> */}
    </div>
  );
}

export default App;
