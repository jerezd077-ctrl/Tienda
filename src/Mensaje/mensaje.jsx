/* 1 crear el componente
   2. crear la funcion que manejara el estado del componente
   3. aplicar los elementos de js en el html
*/


import { useState } from "react"

export const MensajeTexto = ()=>{
    const[mensaje, setEstado] = useState("Estado inicial");
    
    const escribirLetar=(evento)=>{
        let letras = evento.target.value;
        setEstado(letras);
    }
    return(
        <div>
           <input type="text" onInput={escribirLetar}/>
           <label>{mensaje}</label>
         </div>
    );
};