import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Button } from "@mui/material";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const precioTotal = getTotalPrice ()

  return (
    <div style={{width: "100%", display: "flex", justifyContent:"space-between"}}>
      <h1>
        {cart.map((elemento) => {
          return (
            <div style={{border: "2px solid black"}} key={elemento.id} variant="contained">
              <h2>{elemento.title}</h2>
              <img src={elemento.img} alt="" style={{width: "200px"}} />
              <h3>Cantidad: {elemento.quantity}</h3>
              <h3>{elemento.price}</h3>
              <Button color="secondary" variant="contained">Eliminar</Button>
            </div>
          );
        })}
      </h1>
      <h1>El total del carrito es: {precioTotal} </h1>
      <Button onClick={clearCart} variant="contained" color="primary">Limpiar carrito</Button>
    </div>
  );
};

export default Cart;
