import logo from './logo.svg';
import './App.css';

// TUS COMPONENTES ORIGINALES
import CardUsuario from './UsuarioComponentes/UsuarioCard';
import ProductosTabla from './ProductoComponentes/ProductosTabla';
import CardProducto from './producto/cardProducto';

// LOS NUEVOS COMPONENTES DE CLAUDE (Revisa que estén guardados en ProductoComponentes)
import CardItem from "./ProductoComponentes/CardItem";
import Newsletter from "./ProductoComponentes/Newsletter";
import HoverButtons from "./ProductoComponentes/HoverButtons";
import TailwindCard from "./ProductoComponentes/TailwindCard";
import GenderSelector from "./ProductoComponentes/GenderSelector";

function App() {
  return (
    /* Mantenemos el div con los estilos de Claude para que todo se organice bien en una columna limpia */
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "30px", padding: "30px" }}>
      
      {/* 1. TUS COMPONENTES VIEJOS */}
      <CardUsuario />
      <ProductosTabla />
      <CardProducto />

      <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '20px 0' }} /> {/* Una línea separadora opcional */}

      {/* 2. LOS COMPONENTES NUEVOS DE CLAUDE */}
      {/* Card de producto - CON props */}
      <CardItem nombre="Cool Chair" precio="$100" descripcion="This is a chair." />

      {/* Newsletter - SIN props */}
      <Newsletter />

      {/* Hover Buttons - CON props (lista) */}
      <HoverButtons />

      {/* Tailwind Card - CON props */}
      <TailwindCard />

      {/* Gender Selector - SIN props */}
      <GenderSelector />
      
    </div>
  );
}

export default App;