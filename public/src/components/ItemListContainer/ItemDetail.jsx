import React from 'react'

const ItemDetail = () => {
  return (
   
    <div className="card-container">
    <header class="image-header">
                       <img className="image-main" src={image} />
                       <h1 >{title}</h1>
                       <h2 className="tittle-card">{}id</h2>                          
                       <p className="eth">${price}</p>
                       <p>{description}</p>
                       <ItemCount stock={stock}/>
                       <button id="showAlert" class="boton btn btn-warning" data-id='${producto.id}'>Add to cart</button>
                       </header>
                       
               
                      
</div>
  )
}

export default ItemDetail