import {createContext, useReducer} from "react";
import {CustomerReducer, initialState} from "../reducers/CustomerReducer.ts";

export const CustomerContext=createContext();
export function CustomerProvider({children}:any) {
    const [customers, dispatch] = useReducer(CustomerReducer, initialState);
    return(
        <CustomerContext.Provider value={{ customers, dispatch }}>
            {children}
        </CustomerContext.Provider>


    );
}