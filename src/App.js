import React from "react";
import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import ItemCount from "./Components/itemCount/ItemCount.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { ProductCard } from "./Components/ProductCard/ProductCard.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/Login/Login.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} elemtos`);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Cart" element={<Cart />} />

        <Route path="ItemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<h1> Error 404: Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
