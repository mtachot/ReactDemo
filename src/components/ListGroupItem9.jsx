export default function ListGroupItem9(props){
    const classNameContent = props.isSelected ? "list-group-item active" : "list-group-item";

    return <li key={props.index} className={classNameContent} onClick={props.clickHandler}>{props.text}</li>
}