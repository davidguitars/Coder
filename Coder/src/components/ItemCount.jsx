
import { Alert } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2'

export default  function ItemCount() {

const [countCard, setCountCard] = useState(0)
useEffect(() => {
    if (countCard > 1){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Producto Agregado',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    if(countCard < 1 ){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Producto borrado',
            showConfirmButton: false,
            timer: 1500
          })
    }


}, [countCard])

function handleCount () {
    setCountCard(countCard-2)

}
function handleCountMore () {
    setCountCard(countCard+2)

}

  return (
   <> 
     <button disabled ={countCard === 0} onClick={handleCount}>-2 </button>
     <h1> {countCard} contador </h1>
     <button  disabled ={countCard === 10}onClick={handleCountMore}>+2 </button>
   </>
  )
  }

