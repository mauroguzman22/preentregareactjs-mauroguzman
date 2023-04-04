import React from "react";
import { Link } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";
import {useContext} from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

  const {  getTotalQuantity}  = useContext (CartContext)
  
  const total = getTotalQuantity()


  return (
    <Link to="/Cart">
      <div>
        <span>{total}</span>
        <FaPlaneDeparture size={30} />
      </div>
    </Link>
  );
};
