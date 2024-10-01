import { useState } from "react";
import ListGroupItem10 from "./ListGroupItem10";

function ListGroup10(props){
    const [lastClickedIndex, setLastClickedIndex] = useState(-1);
    const [highlighted, setHighlighted] = useState(-1);

    let isSelected = false;

    const handleClick = (index, item) => {
        setLastClickedIndex(index);
        props.onSelectItem(item);
        setHighlighted(index);
        isSelected = highlighted === index;
    };

    return(
    <>
        <h1>{props.title}</h1>
        <ul className="list-group">
            {
                props.items.map((item, index) => (
                    <ListGroupItem10 key={index} text={item} isSelected={isSelected}
                        onClickHandler={() => handleClick(index, item)}
                    />
                ))
            }
        </ul>
    </>)
}

export default ListGroup10
