import { createSlice } from "@reduxjs/toolkit";

const bannerCounterSlice = createSlice({
    name : 'bannerCounter',
    initialState : {
        counter : 0
    },
    reducers : {
        incrementCounter(state){
            state.counter += 1
        },
        decrementCounter(state){
            state.counter -= 1
        }
    }
})

export const {incrementCounter, decrementCounter} = bannerCounterSlice.actions
export default bannerCounterSlice.reducer