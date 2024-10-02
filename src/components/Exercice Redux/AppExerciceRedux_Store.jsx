import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './AppExerciceRedux_CounterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});
