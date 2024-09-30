const maListe = []

function ListGroup4(){
    return(
        <>
            <h1>Exemple list group 4</h1>
            { maListe.length==0 ? <p>Aucun élément trouvé</p> :
            <ul className="list-group">
            {
                maListe.map((item, index) => <li key={index} className="list-group-item">{item}</li>)
            }
            </ul>}
        </>
    );
}

export default ListGroup4;