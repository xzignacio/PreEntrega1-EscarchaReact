import NavBar from "./components/NavBar/NavBar"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <>
    <h1>Project 001</h1>
    <NavBar/>
    <hr />
    <ItemListContainer greeting="Bienvenido a Project 001"/>
    </>
  )
}

export default App
