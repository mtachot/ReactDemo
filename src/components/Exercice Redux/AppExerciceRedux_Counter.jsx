import { useSelector } from "react-redux";

function AppExerciceRedux_Counter(){
    const count = useSelector(state => state.counter.value);
    
    return(
        <>
            <div>
                <span>{count}</span>
            </div>
        </>
    )
}

export default AppExerciceRedux_Counter;