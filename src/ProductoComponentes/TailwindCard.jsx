import './TailwindCard.css';
import { useState } from "react";

function TailwindCard({ titulo, descripcion, textoBoton }) {
  const card = {
    titulo: titulo || "Tailwind card",
    descripcion: descripcion || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    textoBoton: textoBoton || "READ MORE",
  };

  const [expandido, setExpandido] = useState(false);

  return (
    <div className="tailwind-card">
      <div className="tailwind-imagen">
        <span className="tailwind-icono">≋</span>
      </div>
      <div className="tailwind-cuerpo">
        <h3 className="tailwind-titulo">{card.titulo}</h3>
        <p className="tailwind-descripcion">{card.descripcion}</p>
        {expandido && (
          <p className="tailwind-extra">
            Aquí va más información detallada sobre este tema. Puedes poner lo que quieras acá.
          </p>
        )}
        <button className="tailwind-boton" onClick={()=> {
          console.log("click");
          setExpandido(!expandido);
        }}>
          {expandido ? "SHOW LESS" : card.textoBoton}
        </button>
      </div>
    </div>
  );
}

export default TailwindCard;