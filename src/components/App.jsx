import Exemple from "./Exemple"
import ListGroup from "./ListGroup"
import ListGroup2 from "./ListGroup2"
import ListGroup3 from "./ListGroup3"
import ListGroup4 from "./ListGroup4"
import ListGroup5 from "./ListGroup5"
import ListGroup6 from "./ListGroup6"
import ListGroup7 from "./ListGroup7"
import ListGroup8 from "./ListGroup8"
import ListGroup9 from "./ListGroup9"
import ListGroup10 from "./ListGroup10"
import { Route, Routes } from "react-router-dom"

function App() {

  const maListe = ["Elément props 1", "Elément props 2", "Elément props 3"]
  const handleSelectedItem = (item) => console.log(item);

  return (
    <>
      <h1>Hello world !!</h1>
      <Exemple />
      <ListGroup10 title="ListGroup props 10" items={maListe} onSelectItem={handleSelectedItem} />
      <br/><br/>
      <ListGroup9 title="ListGroup props 9" items={maListe} />
      <br/><br/>
      <ListGroup8 />
      <br/><br/>
      <ListGroup7 />
      <br/><br/>
      <ListGroup6 />
      <br/><br/>
      <ListGroup5 />
      <br/><br/>
      <ListGroup4 />
      <br/><br/>
      <ListGroup3 />
      <br/><br/>
      <ListGroup2 />
      <br/><br/>
      <ListGroup />
    </>
  )
}

export default App
