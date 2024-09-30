function ListGroupItem6(props){
    const clickHandler = () => console.log(props.text);

    return <li key={props.index} className="list-group-item" onClick={clickHandler}>{props.text}</li>
}

export default ListGroupItem6;