import React from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount"




const ItemDetail = ({ image, title, price, description, stock, cant}) => {
  
   const onAdd = (cant) => {
      setCant(cant);
       addToCart(item, cant);
     
 };

  return (
    <div className="card-container">
      <header class="image-header">
        <img className="image-main" src={image} />
        <h1>{title}</h1>
        <h2 className="tittle-card">{}id</h2>
        <p className="eth">${price}</p>
       <span>  {description}</span>
       <div> <ItemCount stock={stock} /> </div>
      <button class="boton btn btn-warning">
          
           {
                    cant === 0 ? 
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> 
                    :
                    <> <Link to={"/cart"}>Ir al carrito</Link></>
                } 
          </button>
         
     
      </header>
    </div>
  );
};

export default ItemDetail;