import { useEffect, useState } from "react";

function AppExercice6 (){
    const fetchComment = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        const data = await response.json();
        return data;
    }

    const useEffectTask = async () => {
        const currentId = myObj.id > 0 ? myObj.id : 1;
        const commentResponse = await fetchComment(currentId);
        setMyObj({id:currentId, comment:commentResponse.name})
    }

    const handlePrevious = () => {
        if(myObj.id > 1){
            const previousId = myObj.id - 1;
            setMyObj({id:previousId});
        }
    }

    const handleNext = () => {
        const nextId = myObj.id + 1;
        setMyObj({id:nextId});
    }

    const [myObj, setMyObj] = useState({id:-1, comment:""});

    useEffect(() =>{
        useEffectTask();
    }, [myObj.id]);

    return (
        <>
            <p>Id : {myObj.id}</p>
            <p>Comment : {myObj.comment}</p>
            <button onClick={handlePrevious}>Précédent</button>
            <button onClick={handleNext}>Suivant</button>
        </>
    )
}

export default AppExercice6;