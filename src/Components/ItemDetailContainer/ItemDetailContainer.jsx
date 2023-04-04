import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import {useContext} from "react"

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {agregarAlCarrito} = useContext (CartContext)
  const productSelected = products.find ((element)=> element.id === Number(id) )
const onAdd = (cantidad)=>{


  let producto = {
     ...productSelected,
    quantity: cantidad,
  }

  agregarAlCarrito(producto)
  
}

  return (
    <div>
      <img src={productSelected.img} width="320" heigth="180px" alt="" />
      <h1>{productSelected.title}</h1>
      <p>{productSelected.description}</p>
      <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetailContainer;
