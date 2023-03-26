import React from "react";
import { Link } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";

export const CartWidget = () => {
  return (
    <Link to="/Cart">
      <div>
        <span>1</span>
        <FaPlaneDeparture size={30} />
      </div>
    </Link>
  );
};
