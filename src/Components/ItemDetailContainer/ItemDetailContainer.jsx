import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../itemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productSelected = products.find ((element)=> element.id === Number(id) )
const onAdd = (cantidad)=>{
  console.log(`Se agrego al carrito ${cantidad} productos`)
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
