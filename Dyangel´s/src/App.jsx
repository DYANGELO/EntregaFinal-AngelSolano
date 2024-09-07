
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar/Navbar'
import CartWidget from '../components/CartWidget/CartWidget'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Navbar />

      <ItemListContainer greeting = "Hola, Bienvenido a mi pagina"/>
    </>
  )
}

export default App
