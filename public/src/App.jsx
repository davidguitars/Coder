import './App.css'
import NavbarContent from'./components/NavbarContent'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import ItemCount from './components/ItemCount'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './components/Slider'







function App() {
  

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={ <ItemListContainer />} />
    </Routes> */}
    <div className="App">
      <header>
      <NavbarContent />
      </header>
      {/* <Slider /> */}
    
       <ItemListContainer /> 
      <ItemCount />
     
 
   <Footer />
   
  
    </div>
    {/* </BrowserRouter> */}
    </>
    
  )
}

export default App



