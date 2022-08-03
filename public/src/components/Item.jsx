import React from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'



const Item = ({ image, title, price,stock, id }) => {

 const urlDetails = `./item/${id}`

  return (
    <div className="card-container">
      <header className="image-header">
        <img className="image-main" src={image} />
        <h1>{title}</h1>
        <h2 className="tittle-card">{}id</h2>
        <p className="eth">${price}</p>
       <div> <ItemCount stock={stock} /> </div>
       <Link to={urlDetails}> 
          <button
            class="boton btn btn-warning">
            Ver Detalle
          </button>
         </Link>
      </header>
    </div>
  );
};

export default Item;
