// ProductoComponentes/HoverButtons.jsx
// Componente CON props: recibe lista de botones
 
import { useState } from "react";
 
function HoverButtons({ botones }) {
  // Estructura de datos: lista (array) de botones con color y texto
  const listaBotones = botones || [
    { id: 1, color: "#e05575", texto: "Hover Me", subtexto: "Lorem Ipsum" },
    { id: 2, color: "#4a90d9", texto: "Hover Me", subtexto: "Lorem Ipsum" },
    { id: 3, color: "#4caf7d", texto: "Hover Me", subtexto: "Lorem Ipsum" },
  ];
 
  const [hover, setHover] = useState(null);
 
  const estilos = {
    contenedor: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "200px",
    },
    boton: (color, esHover) => ({
      backgroundColor: color,
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "18px",
      textAlign: "center",
      cursor: "pointer",
      opacity: esHover ? 0.85 : 1,
      transform: esHover ? "scale(1.03)" : "scale(1)",
      transition: "all 0.2s ease",
    }),
    texto: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "0",
    },
    subtexto: {
      fontSize: "12px",
      margin: "2px 0 0 0",
    },
  };
 
  return (
    <div style={estilos.contenedor}>
      {listaBotones.map((btn) => (
        <button
          key={btn.id}
          style={estilos.boton(btn.color, hover === btn.id)}
          onMouseEnter={() => setHover(btn.id)}
          onMouseLeave={() => setHover(null)}
        >
          <p style={estilos.texto}>{btn.texto}</p>
          <p style={estilos.subtexto}>{btn.subtexto}</p>
        </button>
      ))}
    </div>
  );
}
 
export default HoverButtons;