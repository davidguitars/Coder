import "./App.css";
import NavbarContent from "./components/NavbarContent";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavbarContent />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer /> } />
            <Route path="/item/:itemId" element={<ItemDetailContainer /> } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
