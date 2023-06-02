import React,{useEffect} from "react";

const TvShows = () => {
    let API = "https://api.tvmaze.com/search/shows?q=all"
    const fetchApiData = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchApiData(API);
    },[])
    return null;
}

export default TvShows;