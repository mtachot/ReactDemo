function LE_ItemTodo(props){
    return (
        <>
            <li key={props.index} className="list-group-item">{props.text}</li>
            
        </>
    )
}

export default LE_ItemTodo;