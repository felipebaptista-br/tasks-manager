import { createSlice } from "@reduxjs/toolkit";

const initialState = 'light';

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state, { payload }) => {
            localStorage.setItem('mode', JSON.stringify(payload))
            state = payload
            return state
        }
    }
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;