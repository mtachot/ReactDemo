const maListe = ["Element 1", "Element 2", "Element 3", "Element 4"]

function ListGroup3(){
    return(
        <>
            <h1>Exemple list group 3</h1>
            <ul className="list-group">
            {
                maListe.map((item, index) => <li key={index} className="list-group-item">{item}</li>)
            } 
            </ul>
        </>
    );
}

export default ListGroup3;