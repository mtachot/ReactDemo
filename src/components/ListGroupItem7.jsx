import { useState } from "react";

function ListGroupItem7(props){
    const [highlighted, setHighlighted] = useState(false);
    const classNameContent = highlighted ? "list-group-item active" : "list-group-item";
    const clickHandler = () => setHighlighted(!highlighted);

    return <li key={props.index} className={classNameContent} onClick={clickHandler}>{props.text}</li>
}
    
export default ListGroupItem7;