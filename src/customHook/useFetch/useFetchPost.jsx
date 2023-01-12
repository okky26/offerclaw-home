import React, {useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setLoad } from '../../reduxStore/loading/loading';
import { setDataAppliances, setDataCategory, setDataHouseEssentials, setDataMisc, setDataOutdoor, setDataPersonalCare, setDataPets, setDataPopularPost, setDataPostBanner, setDataTech } from '../../reduxStore/dataAPI/dataAPI';

export const useFetchPostBanner = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataPostBanner(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchCategory = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataCategory(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchPopularPost = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataPopularPost(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchDataTech = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataTech(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchDataHouse = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataHouseEssentials(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchDataPersonal = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataPersonalCare(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchDataOutdoor = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataOutdoor(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchDataPets = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataPets(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchDataAppliances = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataAppliances(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}
export const useFetchDataMisc = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoad());
        axios
        .get(url)
        .then((response) => {
            response.data.map(data => dispatch(setDataMisc(data)))
        })
        .finally(
            dispatch(setLoad())
        )
    }, [url])
}


