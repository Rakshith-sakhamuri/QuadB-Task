import React,{useContext, useState} from "react";

const AppContext = React.createContext();


const AppProvider = ({children}) => {
    // const [state , setState] = useState(initialState);
    const [state , dispatch] = useReducer(reducer,initialState);
    return (
        <AppContext.Provider value={"Rakshith"}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};