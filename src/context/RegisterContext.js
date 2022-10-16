import { createContext,useReducer } from "react";
const INITIAL_STATE ={
    username:"",
    email:"",
    password:""
}
export const RegisterContext = createContext(INITIAL_STATE);

export const RegisterReducer = (state, action) =>{
    switch(action.type){
        case 'CREATE':
            return [...state, action.payload];  
        default:
            return state;
        }
}
export const RegisterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RegisterReducer, INITIAL_STATE);
    return(
        <RegisterContext.Provider
        value={{
            username: state.username,
            email: state.email,
            password: state.password,
        dispatch, 
        }}>
            {children}
        </RegisterContext.Provider>
    )
}