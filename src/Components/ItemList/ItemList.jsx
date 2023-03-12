import React from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((element) => {
        return <h1> {element.title}</h1>;
      })}
    </div>
  );
};

export default ItemList;
