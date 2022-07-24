import './App.css'
import NavbarContent from'./components/NavbarContent'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import ItemCount from './components/ItemCount'




function App() {
  

  return (
    <div className="App">
      <header>
      <NavbarContent />
      </header>
      <div className="bodyContent">
      <ItemListContainer />
      <ItemCount />
     
      </div>
   <section> 
   <Footer />
   </section>
  
    </div>
    
  )
}

export default App



