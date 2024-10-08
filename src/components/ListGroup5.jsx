import ListGroupItem5 from "./ListGroupItem5";

const maListe = ["Elément paramétré 1", "Elément paramétré 2", "Elément paramétré 3"]

function ListGroup5(){
    return(
    <>
        <h1>Exemple list group 5</h1>
        <ul className="list-group">
            {
                maListe.map((item, index) => 
                <ListGroupItem5 text={item} key={index} />)
            }
        </ul>
    </>
)}

export default ListGroup5;