import './App.css';
import CardUsuario from './UsuarioComponentes/UsuarioCard';
import ProductosTabla from './ProductoComponentes/ProductosTabla';
import CardProducto from './producto/cardProducto';
import CardItem from "./ProductoComponentes/CardItem";
import Newsletter from "./ProductoComponentes/Newsletter";
import HoverButtons from "./ProductoComponentes/HoverButtons";
import TailwindCard from "./ProductoComponentes/TailwindCard";
import GenderSelector from "./ProductoComponentes/GenderSelector";
import { MensajeTexto } from "./Mensaje/mensaje";
import { Saludo } from "./Mensaje/saludo";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "30px", padding: "30px" }}>
      <CardUsuario />
      <ProductosTabla />
      <CardProducto />
      <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '20px 0' }} />
      <CardItem key="carditem-unico" nombre="Silla genial" precio="$100" descripcion="Esto es una silla." />
      <Newsletter />
      <HoverButtons />
      <TailwindCard />
      <GenderSelector />
      <MensajeTexto />
      <Saludo />
    </div>
  );
}

export default App;