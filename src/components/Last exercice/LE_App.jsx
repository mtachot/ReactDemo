import LE_AddTodo from "./LE_AddTodo";

function LE_App(){
    return (
        <>
            <h1>Todo list APP</h1>
            <LE_AddTodo />
            <LE_ListTodo />
        </>
    )
}

export default LE_App;