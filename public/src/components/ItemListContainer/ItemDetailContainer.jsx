import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import ItemDetail from './ItemDetail';

const ItemListContainer = () => {

  const [products, setProducts] = useState({})
  const {itemId} = useParams()
 

  useEffect(() => {
      setProducts([
          {   
              id: 1,
              image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
              title: "Adidas",
              price: 2500,
              description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
              stock: 15
          },
          {   
              id: 2,
              image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
              title: "TNF",
              price: 2200,
              description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
              stock: 20
          },
          {   
            id: 3,
            image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
            title: "TNF",
            price: 2200,
            description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
            stock: 20
        },
        {   
          id: 4,
          image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
          title: "TNF",
          price: 2200,
          description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
          stock: 20
      },
      {   
        id: 5,
        image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
        title: "TNF",
        price: 2200,
        description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
        stock: 20
    },
    {   
      id: 6,
      image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
      title: "TNF",
      price: 2200,
      description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
      stock: 20
  },
  {   
    id: 7,
    image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
    title: "TNF",
    price: 2200,
    description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
    stock: 20
},
{   
  id: 8,
  image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
  title: "TNF",
  price: 2200,
  description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
  stock: 20
},
{   
  id: 9,
  image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
  title: "TNF",
  price: 2200,
  description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
  stock: 20
},
{   
  id: 10,
  image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
  title: "TNF",
  price: 2200,
  description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
  stock: 20
},
{   
  id: 11,
  image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
  title: "TNF",
  price: 2200,
  description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
  stock: 20
},
{   
  id: 12,
  image: 'https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg',
  title: "TNF",
  price: 2200,
  description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
  stock: 20
},

        
      ])
  }, {})



  return (
    <div>
    <ItemDetail products={products}/>
     </div>
    
  )
}

export default ItemListContainer

