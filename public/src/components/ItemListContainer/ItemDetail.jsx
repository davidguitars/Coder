import React from "react";
import ItemCount from "../ItemCount"


const ItemDetail = ({ image, title, price, description, stock }) => {

  return (
    <div className="card-container">
      <header class="image-header">
        <img className="image-main" src={image} />
        <h1>{title}</h1>
        <h2 className="tittle-card">{}id</h2>
        <p className="eth">${price}</p>
        {description}
       <div> <ItemCount stock={stock} /> </div>
      <button class="boton btn btn-warning">
           Ir al Carrito
          </button>
     
      </header>
    </div>
  );
};

export default ItemDetail;