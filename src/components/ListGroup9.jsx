import { useState } from "react";
import ListGroupItem9 from "./ListGroupItem9";

export default function ListGroup9(props){
    const [highlighted, setHighlighted] = useState(-1);

    function afficherElementListe(item, index){
        const isSelected = highlighted === index;
        const handleClick = () => setHighlighted(index);

        return (
            <ListGroupItem9 text={item} key={index} isSelected={isSelected} clickHandler={handleClick} />
        );
    }

    return(
    <>
        <h1>{props.title}</h1>
        <ul className="list-group">
            {
                props.items.map(afficherElementListe)
            }
        </ul>
    </>)
}
