import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getNewsAPI } from "./Api";

export const NewsContext = createContext();

const Context = ({ children }) => {

    const [news, setNews] = useState([])
    const [category, setcategory] = useState('general')
    const [index, setIndex] = useState(1);


    const fetchNews = async () => {
        const { data } = await axios.get(getNewsAPI(category));
        setNews(data);
        setIndex(1)
    }

    useEffect(() => {
        fetchNews();
    }, [category]);

    return (
        <NewsContext.Provider value={{ news, index, setIndex, fetchNews }}>{children}
        </NewsContext.Provider>
    )
}

export default Context;