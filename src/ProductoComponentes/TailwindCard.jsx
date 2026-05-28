// ProductoComponentes/TailwindCard.jsx
// Componente CON props: recibe titulo, descripcion y textoBoton
 
function TailwindCard({ titulo, descripcion, textoBoton }) {
  // Estructura de datos: diccionario (objeto) con la info de la card
  const card = {
    titulo: titulo || "Tailwind card",
    descripcion:
      descripcion ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    textoBoton: textoBoton || "READ MORE",
  };
 
  const estilos = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "220px",
      overflow: "hidden",
      fontFamily: "sans-serif",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      backgroundColor: "#fff",
    },
    imagen: {
      backgroundColor: "#4a90d9",
      height: "110px",
      display: "flex",
      alignItems: "flex-start",
      padding: "8px",
    },
    icono: {
      color: "#fff",
      fontSize: "20px",
    },
    cuerpo: {
      padding: "14px",
    },
    titulo: {
      fontSize: "15px",
      fontWeight: "bold",
      margin: "0 0 6px 0",
    },
    descripcion: {
      fontSize: "13px",
      color: "#555",
      lineHeight: "1.4",
      margin: "0 0 14px 0",
    },
    boton: {
      backgroundColor: "#4a90d9",
      color: "#fff",
      border: "none",
      padding: "8px 14px",
      fontSize: "12px",
      fontWeight: "bold",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };
 
  return (
    <div style={estilos.card}>
      <div style={estilos.imagen}>
        <span style={estilos.icono}>≋</span>
      </div>
      <div style={estilos.cuerpo}>
        <h3 style={estilos.titulo}>{card.titulo}</h3>
        <p style={estilos.descripcion}>{card.descripcion}</p>
        <button style={estilos.boton}>{card.textoBoton}</button>
      </div>
    </div>
  );
}
 
export default TailwindCard;