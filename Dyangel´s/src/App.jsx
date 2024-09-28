import Navbar from '../components/Navbar/Navbar'
import CartWidget from '../components/CartWidget/CartWidget'
import ItemDetail from '../components/DetailComponents/itemDetail'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/DetailComponents/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from '../components/ItemsToComp/Page404'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Todos los Productos"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Todos los Productos"} />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes> 
      </BrowserRouter>

    </>
  )
}

export default App
