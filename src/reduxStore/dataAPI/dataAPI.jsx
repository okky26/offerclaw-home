import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : 'data',
    initialState : {
        dataPostBanner : [],
        dataCategory : [],
        dataPopularPost : [],
        dataPostPerCategory : {
            dataTech : [],
            dataHouseEssentials : [],
            dataPersonalCare : [],
            dataOutdoor : [],
            dataAppliances : [],
            dataMisc : [],
            dataPets : []
        },
    },
    reducers : {
        setDataPostBanner(state,action){
            state.dataPostBanner.push(action.payload)
        },
        setDataCategory(state,action){
            state.dataCategory.push(action.payload)
        },
        setDataPopularPost(state,action){
            state.dataPopularPost.push(action.payload)
        },
        setDataTech(state,action){
            state.dataPostPerCategory.dataTech.push(action.payload)
        },
        setDataHouseEssentials(state,action){
            state.dataPostPerCategory.dataHouseEssentials.push(action.payload)
        },
        setDataPersonalCare(state,action){
            state.dataPostPerCategory.dataPersonalCare.push(action.payload)
        },
        setDataOutdoor(state,action){
            state.dataPostPerCategory.dataOutdoor.push(action.payload)
        },
        setDataAppliances(state,action){
            state.dataPostPerCategory.dataAppliances.push(action.payload)
        },
        setDataMisc(state,action){
            state.dataPostPerCategory.dataMisc.push(action.payload)
        },
        setDataPets(state,action){
            state.dataPostPerCategory.dataPets.push(action.payload)
        },
    }
});

export const {setDataPostBanner, setDataCategory, setDataTech, setDataPopularPost, setDataPersonalCare, setDataAppliances, setDataHouseEssentials, setDataMisc, setDataOutdoor, setDataPets} = dataSlice.actions;
export default dataSlice.reducer;