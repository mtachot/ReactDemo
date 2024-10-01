function Ex4Cart (props) {
    return (
        <>
            <button onClick={props.handleClickInc}>Add</button>
            <button onClick={props.handleClickDec}>Remove</button>
            <br/>
            <p>List items :</p>
            <ol className="list-group">
            {
                props.itemsList.map((item, index) => <li key={index} className="list-group-item">{item}</li>)
            }
            </ol>
            <br/>
        </>
    )
}

export default Ex4Cart;