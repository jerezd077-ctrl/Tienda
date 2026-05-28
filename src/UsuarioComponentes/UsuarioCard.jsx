import '../estilosCss/UsuarioEstilos.css'
const CardUsuario = () =>{
let nombreUsuario = "David Alexander";
let apellidoUsuario = "Jerez Rubio";
let celularUsuario = "10101010101"
    return(
        <div>
            <img />
            <p>nombre usuario: <span>{nombreUsuario}</span></p>
            <p>apellido usuario: <span>{apellidoUsuario}</span></p>
            <p>celular usuario: <span>{celularUsuario}</span></p>
        </div>
    )
}
export default CardUsuario;