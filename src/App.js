import { Footer } from "./Components/Footer/Footer.jsx";
import ItemCount from "./Components/itemCount/ItemCount.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { ProductCard } from "./Components/ProductCard/ProductCard.jsx";

function App() {

  const onAdd = ( cantidad) => {
    console.log (`se agrego al carrito ${cantidad} elemtos`)
  }

  return (
    <div>
      <Navbar />
      <ItemListContainer/>
      <ProductCard tittle={"Producto uno"} price={1500} />
     {/*  <ItemCount stock={5} initial={1} onAdd= {onAdd}/> */}
      <Footer />
    </div>
  );
}

export default App;
