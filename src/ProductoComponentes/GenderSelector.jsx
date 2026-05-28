// ProductoComponentes/GenderSelector.jsx
// Componente SIN props
 
import { useState } from "react";
 
function GenderSelector() {
  // Estructura de datos: lista (array) de opciones de género
  const opciones = [
    { id: "masculino", simbolo: "♂", color: "#6ab0e0" },
    { id: "femenino",  simbolo: "♀", color: "#e89ec0" },
    { id: "otro",      simbolo: "⚧", color: "#b0b0d8" },
    { id: "ns",        simbolo: "?", color: "#c0c0c0" },
  ];
 
  const [seleccionado, setSeleccionado] = useState(null);
 
  const estilos = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "6px",
      padding: "16px 20px",
      width: "260px",
      fontFamily: "monospace",
      backgroundColor: "#fff",
    },
    titulo: {
      fontSize: "12px",
      letterSpacing: "1px",
      marginBottom: "14px",
      color: "#333",
    },
    grupo: {
      display: "flex",
      gap: "12px",
    },
    circulo: (color, activo) => ({
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: `2px solid ${color}`,
      backgroundColor: activo ? color : "transparent",
      color: activo ? "#fff" : color,
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.2s ease",
    }),
  };
 
  return (
    <div style={estilos.card}>
      <p style={estilos.titulo}>PLEASE SELECT YOUR GENDER</p>
      <div style={estilos.grupo}>
        {opciones.map((op) => (
          <button
            key={op.id}
            style={estilos.circulo(op.color, seleccionado === op.id)}
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