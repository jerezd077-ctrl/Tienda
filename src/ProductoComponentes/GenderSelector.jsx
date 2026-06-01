import './GenderSelector.css';
import { useState } from "react";

function GenderSelector() {
  const opciones = [
    { id: "masculino", simbolo: "♂", color: "#6ab0e0" },
    { id: "femenino",  simbolo: "♀", color: "#e89ec0" },
    { id: "otro",      simbolo: "⚧", color: "#b0b0d8" },
    { id: "ns",        simbolo: "?", color: "#c0c0c0" },
  ];

  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div className="gender-card">
      <p className="gender-titulo">PLEASE SELECT YOUR GENDER</p>
      <div className="gender-grupo">
        {opciones.map((op) => (
          <button
            key={op.id}
            className={`gender-circulo ${seleccionado === op.id ? "activo" : ""}`}
            style={{
              border: `2px solid ${op.color}`,
              backgroundColor: seleccionado === op.id ? op.color : "transparent",
              color: seleccionado === op.id ? "#fff" : op.color,
            }}
            onClick={() => setSeleccionado(op.id)}
            title={op.id}
          >
            {op.simbolo}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenderSelector;