import './CardItem.css';

function CardItem({ nombre, precio, descripcion }) {
  const producto = {
    nombre: nombre || "Cool Chair",
    precio: precio || "$100",
    descripcion: descripcion || "This is a chair.",
  };

  return (
    <div className="card">
      <div className="card-imagen">{producto.descripcion}</div>
      <p className="card-nombre">{producto.nombre}</p>
      <p className="card-precio">{producto.precio}</p>
    </div>
  );
}

export default CardItem;