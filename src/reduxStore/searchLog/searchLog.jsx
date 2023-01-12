import { createSlice } from "@reduxjs/toolkit";

const searchLogSlice = createSlice({
    name : 'searchLog',
    initialState : {
        log : ''
    },
    reducers : {
        setLog(state,action){
            state.log = action.payload
        }
    }
})

export const {setLog} = searchLogSlice.actions;
export default searchLogSlice.reducer;