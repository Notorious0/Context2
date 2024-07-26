import { createContext, useState } from "react";

export const NameContext = createContext();

export const NameContextProvider = (props) =>{
    let[name,setName] = useState("Onur");
    let[surname,setSurname] = useState("Notorious");

    return(
        <NameContext.Provider value={{firstName:name,lastname:surname,setFirstName:setName,setLastname:setSurname}}>
            {props.children}
        </NameContext.Provider>
    );
};