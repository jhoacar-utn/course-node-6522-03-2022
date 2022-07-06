import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../context/store";
import { AuthorizationContext } from "../../context/authorization";



export default function AuthMiddleware({ children }) {
    const { globalState } = useContext(StoreContext)
    const { isloggedIn } = globalState

    return (<>
        {isloggedIn && children}
        {!isloggedIn && <Navigate to="/"></Navigate>}
    </>
    )
} 