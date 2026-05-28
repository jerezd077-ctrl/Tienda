// ProductoComponentes/CardItem.jsx
// Componente CON props: recibe nombre y precio
 
function CardItem({ nombre, precio, descripcion }) {
  // Estructura de datos: diccionario (objeto) con info del producto
  const producto = {
    nombre: nombre || "Cool Chair",
    precio: precio || "$100",
    descripcion: descripcion || "This is a chair.",
  };
 
  const estilos = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "180px",
      padding: "10px",
      fontFamily: "sans-serif",
      backgroundColor: "#fff",
    },
    imagen: {
      backgroundColor: "#e0e0e0",
      height: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#666",
      fontSize: "14px",
      marginBottom: "8px",
      textAlign: "center",
    },
    nombre: {
      fontSize: "14px",
      margin: "4px 0",
    },
    precio: {
      fontSize: "14px",
      fontWeight: "bold",
      margin: "0",
    },
  };
 
  return (
    <div style={estilos.card}>
      <div style={estilos.imagen}>{producto.descripcion}</div>
      <p style={estilos.nombre}>{producto.nombre}</p>
      <p style={estilos.precio}>{producto.precio}</p>
    </div>
  );
}
 
export default CardItem;