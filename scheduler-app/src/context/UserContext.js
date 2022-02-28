import { createContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";

const userState = {}

export const UserContext = createContext(userState);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer,userState);

    function setUser(id){
        dispatch({
            type: 'SET_USER',
            payload: id
        });
    }

    return(
        <UserContext.Provider value={{
            userState: state.userState,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}