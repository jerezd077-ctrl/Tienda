import { useState } from "react";

export const Saludo = () => {
    const [mensajeSaludo, setSaludo] = useState("....");

    const hacerSaludo = () => {
        setSaludo("hola cliente");
    }

    return (
        <div>
            <button onClick={hacerSaludo}>Hacer Mensaje</button>
            <label>{mensajeSaludo}</label>
        </div>
    );
}