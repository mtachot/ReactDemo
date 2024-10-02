import LE_ItemTodo from "./LE_ItemTodo";

function LE_ListTodo(props){
    return(
        <>
            <h2>To do list :</h2>
            <ul className="list-group">
                {props.items.map(<LE_ItemTodo text={item} index={key} />)}
            </ul>
        </>
    )
}

return LE_ListTodo;