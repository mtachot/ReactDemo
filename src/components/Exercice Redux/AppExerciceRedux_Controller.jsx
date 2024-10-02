import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./AppExerciceRedux_CounterSlice";
import { useState } from "react";

function AppExerciceRedux_Controller(){
    const dispatch = useDispatch();
    const [incrementValue, setIncrementValue] = useState('1');
    
    return(
        <>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <input type="number" value={incrementValue} onChange={e => setIncrementValue(e.target.value)}/>
                <button onClick={() => dispatch(incrementByAmount(Number(incrementValue) || 0))}>Increment by amount</button>
            </div>
        </>
    )
}


export default AppExerciceRedux_Controller;