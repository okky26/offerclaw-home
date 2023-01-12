import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name : 'loading',
    initialState : {
        load : false
    },
    reducers : {
        setLoad(state){
            state.load = !state.load
        }
    }
});

export const {setLoad} = loadingSlice.actions;
export default loadingSlice.reducer;