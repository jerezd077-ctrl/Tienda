import './HoverButtons.css';
import { useState } from "react";

function HoverButtons({ botones }) {
  const listaBotones = botones || [
    { id: 1, color: "rojo", texto: "Hover Me", subtexto: "Lorem Ipsum" },
    { id: 2, color: "azul", texto: "Hover Me", subtexto: "Lorem Ipsum" },
    { id: 3, color: "verde", texto: "Hover Me", subtexto: "Lorem Ipsum" },
  ];

  const [hover, setHover] = useState(null);

  return (
    <div className="contenedor-botones">
      {listaBotones.map((btn) => (
        <button
          key={btn.id}
          className={`boton-hover ${btn.color} ${hover === btn.id ? "activo" : ""}`}
          onMouseEnter={() => setHover(btn.id)}
          onMouseLeave={() => setHover(null)}
        >
          <p className="boton-texto">{btn.texto}</p>
          <p className="boton-subtexto">{btn.subtexto}</p>
        </button>
      ))}
    </div>
  );
}

export default HoverButtons;