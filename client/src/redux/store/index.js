import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "../reducers/mode"

const store = configureStore({
    reducer: {
        mode: modeSlice,
    }
});

export default store;