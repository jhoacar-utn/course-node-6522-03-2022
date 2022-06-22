import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthorizationContext } from "../../context/authorization";


export default function AuthMiddleware({ children }) {

    const { isLoggedIn } = useContext(AuthorizationContext);

    return (
        <>
            {isLoggedIn && children}
            {!isLoggedIn && <Navigate to="/"></Navigate>}
        </>
    )

}