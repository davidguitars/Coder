
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
    setCountCard(countCard-1)

}
function handleCountMore () {
    setCountCard(countCard+1)

}

  return (
   <> <div className="contador__button">
     <button disabled ={countCard === 0} onClick={handleCount}>-1 </button>
     <span> {countCard}  </span>
     <button  disabled ={countCard === 10}onClick={handleCountMore}>+1 </button>
   </div>
  
   </>
  )
  }

