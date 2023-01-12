import { configureStore } from "@reduxjs/toolkit";
import DataSliceReducer from './dataAPI/dataAPI';
import LoadingSliceReducer from './loading/loading';
import SearchLogSliceReducer from './searchLog/searchLog';
import BannerCounterSliceReducer from './sliderCounter/bannerCounter';

const reduxStore = configureStore({
    reducer : {
        data : DataSliceReducer,
        loading : LoadingSliceReducer,
        searchLog : SearchLogSliceReducer,
        bannerCounter : BannerCounterSliceReducer
    }
})

export default reduxStore;