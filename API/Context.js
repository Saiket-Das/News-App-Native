import { createContext, useState } from "react";

export const newContext = createContext();

const Context = ({ children }) => {

    const [news, setNews] = useState([])
    const [cetagory, setCetagory] = useState('general')

    return <newContext.Provider>{children}</newContext.Provider>
}

export default Context;