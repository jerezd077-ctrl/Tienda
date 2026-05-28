// ProductoComponentes/Newsletter.jsx
// Componente SIN props
 
import { useState } from "react";
 
function Newsletter() {
  // Estructura de datos: diccionario (objeto) con info del newsletter
  const info = {
    titulo: "NEWSLETTER",
    descripcion: "Get existential crisis delivered straight to your inbox every week.",
    placeholder: "Your life",
    boton: "CLICK ME",
  };
 
  const [valor, setValor] = useState("");
 
  const estilos = {
    card: {
      border: "3px solid #000",
      padding: "20px",
      width: "220px",
      fontFamily: "sans-serif",
      backgroundColor: "#fff",
    },
    titulo: {
      fontSize: "22px",
      fontWeight: "900",
      margin: "0 0 10px 0",
    },
    descripcion: {
      fontSize: "13px",
      margin: "0 0 14px 0",
      lineHeight: "1.4",
    },
    input: {
      width: "100%",
      padding: "8px",
      fontSize: "13px",
      border: "1px solid #ccc",
      marginBottom: "12px",
      boxSizing: "border-box",
    },
    boton: {
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      padding: "10px 0",
      width: "100%",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };
 
  return (
    <div style={estilos.card}>
      <h2 style={estilos.titulo}>{info.titulo}</h2>
      <p style={estilos.descripcion}>{info.descripcion}</p>
      <input
        style={estilos.input}
        type="text"
        placeholder={info.placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button style={estilos.boton}>{info.boton}</button>
    </div>
  );
}
 
export default Newsletter;