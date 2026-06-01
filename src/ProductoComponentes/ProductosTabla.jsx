import '../estilosCss/TablaEstilos.css'

const ProductosTabla = () =>{

    // Codigo javascript
    //]
    let productos = [
        {
            codigo: "P001",
            nombre: "Queso Paisa",
            cantidad: 2000,
            unidad: "kg"
        },

        {
            codigo: "P002",
            nombre: "Leche Entera",
            cantidad: 1000,
            unidad: "ml"
        },

        {
            codigo: "P003",
            nombre: "Arrozcito",
            cantidad: 5,
            unidad: "kg"
        },

        {
            codigo: "P004",
            nombre: "Azucariña",
            cantidad: 2,
            unidad: "kg"
        }
    ]

    return(

        // Codigo html
        <div className='contenedorTabla'>

            <table border="1">

                <thead>

                    <tr>
                        <th>Codigo Productos</th>
                        <th>Nombre Productos</th>
                        <th>Cantidad Comprada</th>
                        <th>Unidad de medida</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        productos.map((producto, index) =>(

                            <tr key={index}>

                                <td>{producto.codigo}</td>

                                <td>{producto.nombre}</td>

                                <td>{producto.cantidad}</td>

                                <td>{producto.unidad}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default ProductosTabla