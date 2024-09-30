import { useState } from "react";
import ListGroupItem8 from "./ListGroupItem8";

const maListe = ["Elément paramétré 1", "Elément paramétré 2", "Elément paramétré 3"]

function ListGroup8(){
    const [highlighted, setHighlighted] = useState(-1);

    function afficherElementListe(item, index){
        const isSelected = highlighted === index;
        const handleClick = () => setHighlighted(index);

        return (
            <ListGroupItem8 text={item} key={index} isSelected={isSelected} clickHandler={handleClick} />
        );
    }

    return(
    <>
        <h1>Exemple list group 8</h1>
        <ul className="list-group">
            {
                maListe.map(afficherElementListe)
            }
        </ul>
    </>)
}

export default ListGroup8;