import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { products } from "../../productsMock.js";
import ItemList from "../ItemList/ItemList.jsx";



export const ItemListContainer = () => {

const {categoryName} = useParams();

const [items, setItems] = useState([]);

const productosFiltrados = products.filter((elemento)=> elemento.category === categoryName )  

console.log(categoryName)


  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve( categoryName ? productosFiltrados : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
