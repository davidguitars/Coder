import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

 const ItemDetail =({image, title, price, description, stock }) => {
  
  
  const [cant, setCant] = useState(0);

  const onAdd = (cant) => {
    setCant(cant);
    addToCart(item, cant);
  };

  return (
    
    <div className="card-container">
      <header className="image-header">
        <img className="image-main" src={image}  />
        <h1>{title}</h1>
        <p className="eth">precio: ${price}</p>
        <span>{description}</span>
        <span>stock: {stock}</span>
        <div className="boton btn btn-warning">
          {cant === 0 ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              {" "}
              <Link to={"/cart"}>Ir al carrito</Link>
            </>
          )}
        </div>
      </header>
    </div>
          );
};

export default ItemDetail;
