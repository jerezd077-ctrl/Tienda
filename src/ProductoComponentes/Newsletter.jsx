import './Newsletter.css';
import { useState } from "react";

function Newsletter() {
  const info = {
    titulo: "NEWSLETTER",
    descripcion: "Get existential crisis delivered straight to your inbox every week.",
    placeholder: "Your life",
    boton: "CLICK ME",
  };

  const [valor, setValor] = useState("");

  return (
    <div className="newsletter-card">
      <h2 className="newsletter-titulo">{info.titulo}</h2>
      <p className="newsletter-descripcion">{info.descripcion}</p>
      <input
        className="newsletter-input"
        type="text"
        placeholder={info.placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button className="newsletter-boton">{info.boton}</button>
    </div>
  );
}

export default Newsletter;