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
   
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "30px", padding: "30px" }}>
      
      
      <CardUsuario />
      <ProductosTabla />
      <CardProducto />

      <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '20px 0' }} /> {/* Una línea separadora opcional */}

    
      <CardItem nombre="Cool Chair" precio="$100" descripcion="This is a chair." />

     
      <Newsletter />
      <HoverButtons />
      <TailwindCard />
      <GenderSelector />
      
    </div>
  );
}

export default App;
