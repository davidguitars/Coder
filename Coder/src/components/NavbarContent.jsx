import React from 'react'
import CartWidget from './CartWidget'




const NavbarContent = () => {
  return (
    <div className='navbarContainer'>
 <button className='navbarContent'>Home</button>
 <button className='navbarContent'>Quienes Somos</button>
 <button className='navbarContent'>Contacto</button> 
 <CartWidget />

  </div>
  )
}

export default NavbarContent





