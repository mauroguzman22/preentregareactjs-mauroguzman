
import { Footer } from "./Components/Footer/Footer.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx"
import { ProductCard } from "./Components/ProductCard/ProductCard.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ProductCard tittle={"Producto uno"} price={1500}/>
      <Footer />
    </div>
  );
}

export default App;
