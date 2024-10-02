import AppExerciceRedux_Counter from "./AppExerciceRedux_Counter";
import AppExerciceRedux_Controller from "./AppExerciceRedux_Controller";
import { Provider } from "react-redux";
import store from "./AppExerciceRedux_Store";

function AppExerciceRedux(){
    return(
        <>
            <Provider store={store}>
                <AppExerciceRedux_Counter/>
                <AppExerciceRedux_Controller/>
            </Provider>
        </>
    )
}

export default AppExerciceRedux;