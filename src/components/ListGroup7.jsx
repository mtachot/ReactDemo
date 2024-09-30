import ListGroupItem7 from "./ListGroupItem7";

const maListe = ["Elément paramétré 1", "Elément paramétré 2", "Elément paramétré 3"]

function ListGroup7(){
    return(
    <>
        <h1>Exemple list group 7</h1>
        <ul className="list-group">
            {
                maListe.map((item, index) => 
                <ListGroupItem7 text={item} key={index} />)
            }
        </ul>
    </>
)}

export default ListGroup7;