'use client'
import { ReactChildrenProps } from "@/interface";
import { Value } from "@radix-ui/react-select";
import { createContext, useContext, useState } from "react";


const initvalue:any = {
    name:'empty',
    burger: false
}
const AppContext = createContext(initvalue)


export const AppContextProvider = ({children}:ReactChildrenProps) => {
    const [name,setName] = useState('Ahmadou 7 Hauwa')
    const [burger,setBurger] = useState<boolean>(false);
    const value:any = {
        name,
        setName,
        burger,
        setBurger
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)