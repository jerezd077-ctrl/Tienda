import logo from './logo.svg';
import './App.css';


import CardUsuario from './UsuarioComponentes/UsuarioCard';
import ProductosTabla from './ProductoComponentes/ProductosTabla';
import CardProducto from './producto/cardProducto';


import CardItem from "./ProductoComponentes/CardItem";
import Newsletter from "./ProductoComponentes/Newsletter";
import HoverButtons from "./ProductoComponentes/HoverButtons";
import TailwindCard from "./ProductoComponentes/TailwindCard";
import GenderSelector from "./ProductoComponentes/GenderSelector";

function App() {
  return (
<<<<<<< HEAD
    
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "30px", padding: "30px" }}>
      
     
=======
   
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "30px", padding: "30px" }}>
      
      
>>>>>>> 59f84dc69b5aa9fff2be30a34f9539527ab10db4
      <CardUsuario />
      <ProductosTabla />
      <CardProducto />

      <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '20px 0' }} /> {/* Una línea separadora opcional */}

<<<<<<< HEAD
      
      <CardItem nombre="Cool Chair" precio="$100" descripcion="This is a chair." />

      
      <Newsletter />

      
      <HoverButtons />

      
      <TailwindCard />

      
=======
    
      <CardItem nombre="Cool Chair" precio="$100" descripcion="This is a chair." />

     
      <Newsletter />
      <HoverButtons />
      <TailwindCard />
>>>>>>> 59f84dc69b5aa9fff2be30a34f9539527ab10db4
      <GenderSelector />
      
    </div>
  );
}

export default App;
