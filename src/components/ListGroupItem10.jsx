export default function ListGroupItem10(props){
    const classNameContent = props.isSelected ? "list-group-item active" : "list-group-item";

    return <li key={props.index} className={classNameContent} onClick={props.onClickHandler}>{props.text}</li>
}