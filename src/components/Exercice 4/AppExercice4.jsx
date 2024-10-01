import { useEffect, useState } from "react"
import Ex4Counter from "./Ex4Counter"
import Ex4Cart from "./Ex4Cart";

function AppExercice4() {
  const [cartItems, setCartItems] = useState([]);
  const nbOfItems = cartItems.length;

  const addHandler = () => setCartItems([...cartItems, `Item ${nbOfItems + 1}`]);
  const removeHandler = () => setCartItems(cartItems.slice(0, -1));

  return (
    <>
      <Ex4Counter nbOfItems={nbOfItems} />
      <Ex4Cart handleClickInc={addHandler} handleClickDec={removeHandler} itemsList={cartItems}/>
    </>
  )
}

export default AppExercice4
