import ListGroupItem6 from "./ListGroupItem6";

const maListe = ["Elément paramétré 1", "Elément paramétré 2", "Elément paramétré 3"]

function ListGroup6(){
    return(
    <>
        <h1>Exemple list group 6</h1>
        <ul className="list-group">
            {
                maListe.map((item, index) => 
                <ListGroupItem6 text={item} key={index} />)
            }
        </ul>
    </>
)}

export default ListGroup6;