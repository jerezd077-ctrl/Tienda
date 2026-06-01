import './TailwindCard.css';

function TailwindCard({ titulo, descripcion, textoBoton }) {
  const card = {
    titulo: titulo || "Tailwind card",
    descripcion: descripcion || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    textoBoton: textoBoton || "READ MORE",
  };

  return (
    <div className="tailwind-card">
      <div className="tailwind-imagen">
        <span className="tailwind-icono">≋</span>
      </div>
      <div className="tailwind-cuerpo">
        <h3 className="tailwind-titulo">{card.titulo}</h3>
        <p className="tailwind-descripcion">{card.descripcion}</p>
        <button className="tailwind-boton">{card.textoBoton}</button>
      </div>
    </div>
  );
}

export default TailwindCard;