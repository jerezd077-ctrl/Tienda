import './CardItem.css';
import { useState } from "react";

function CardItem({ nombre, precio, descripcion }) {
  const producto = {
    nombre: nombre || "Cool Chair",
    precio: precio || "$100",
    descripcion: descripcion || "This is a chair.",
  };

  const [cantidad, setCantidad] = useState(0);

  const agregar = () => {
    setCantidad(prev => prev + 1);
  };

  return (
    <div className="card">
      <div className="card-imagen">{producto.descripcion}</div>
      <p className="card-nombre">{producto.nombre}</p>
      <p className="card-precio">{producto.precio}</p>
      <button className="card-boton" onClick={agregar}>
        Agregar al carrito
      </button>
      {cantidad > 0 && (
        <p className="card-cantidad">🛒 {cantidad} en el carrito</p>
      )}
    </div>
  );
}

export default CardItem;