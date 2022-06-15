import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthorizationContext } from "../context/authorization";



export default function AuthMiddleware({ children }) {
    const { isloggedIn } = useContext(AuthorizationContext)

    return (<>
        {isloggedIn && children}
        {!isloggedIn && <Navigate to="/"></Navigate>}
    </>
    )
}