import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthorizationContext } from "../context/authorization";
import { StoreContext } from "../context/store";

export default function AuthMiddleware(children){
 const{globalState}=   useContext(StoreContext)
 const {isLoggein}=globalState
 return(<>
    {isLoggein && children}
    {!isLoggein && <Navigate to="/"></Navigate>}
 </>
 )
}
