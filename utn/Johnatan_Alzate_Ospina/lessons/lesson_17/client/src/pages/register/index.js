import { Button, Card, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material"
import { useContext, useEffect, useReducer, useState } from "react"
import { Navigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import reducerFunction from "../register/reducers"
import { AuthorizationContext } from "../../context/authorization"
import { getAllCharacters } from '../../services/api'
import { handleRegister } from "../../services/authentication"
import { CHANGE_AVATAR, CHANGE_AVATAR_AND_IMAGEN, CHANGE_EMAIL, CHANGE_IMAGEN, CHANGE_NAME, CHANGE_PASSWORD } from "./actions"
import { StoreContext } from "../../context/store"


export default function Register() {
    
const { globalState } = useContext(StoreContext)
const {isLoggedIn}=globalState
const [avatars, setAvatars] = useState([])

    useEffect(() => {
        getAllCharacters()
            .then(result => {

                setAvatars(result)
                //console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])// si se especifica un array vacio quiere decir q no depende de nada y solo se ejecuta la callback una sola vez       
 //redux se compone de tres fundamentos:
 //dispatch es el disparador de eventos para camniar el estado
 //actions son para cambiar partes especificas del estado
 //reduces son las distintas funciones que se usan para cambiar el estado
 
 const [registerState, setRegisterState] = useReducer(reducerFunction,{
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    })



    const { name, email, password, avatar, image } = registerState
        
    const handleSubmit = (event) => {
           
        event.preventDefault();

            const userData={
                name,
                email,
                password,
                avatar,
                image
            }
    
            handleRegister(userData).then(() => {
                toast.success('Register Succesfull!')
               
            }).catch((error) => {
                console.log(error);
                toast.error("An error has ocurred in the login.")
            });
        
    
       }
    const handleChangeEmail = (event) => {
        
          setRegisterState({
     type:CHANGE_EMAIL,
    payload:event.target.value    })
        
    };

    const handleChangePassword = (event) => {
        setRegisterState({
            type:CHANGE_PASSWORD,
           payload:event.target.value    })
               
           };
    const handleChangeName = (event) => {
        setRegisterState({
            type:CHANGE_NAME,
           payload:event.target.value    })
               
           };
    const handleChangeAvatar = (event) => {
        const newAvatar=event.target.value

        const avatarObject= avatars.find((element)=>{
            return element.name===newAvatar
        })

        const newImage=avatarObject.image

        
        setRegisterState({
            type:CHANGE_AVATAR_AND_IMAGEN,
           payload:{
            avatar:newAvatar,
            image:newImage
           }    
        })
               
           };
 
    return (
        <>
            {isLoggedIn && <Navigate to="/dashboard"></Navigate>}
            <form onSubmit={handleSubmit}>
                <Card sx={{
                    minHeight: '500px',
                    minWidth: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px',
                    padding: '10px'
                }}>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <InputLabel>User name</InputLabel>
                        <Input type="text" value={name} onChange={handleChangeName} required></Input>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} required/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={password} onChange={handleChangePassword} required />
                        <FormHelperText>Please type your password.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <InputLabel>User avatar</InputLabel>
                       
                        <Select value={avatar} onChange={handleChangeAvatar}>
                            {avatars.map((element)=>{
                                return(
                                    <MenuItem value={element.name}>{element.name} </MenuItem>
                                )
                            })}
                            
                           
        
                        </Select>
                        <FormHelperText>Please select an avatar</FormHelperText>
                    </FormControl>
                    <FormControl>
                        {image.length > 0 &&
                            <img src={image}></img>
                        }
                    </FormControl>
                    <Button type="submit" sx={{
                        padding: '20px'
                    }}>
                        Registrar
                    </Button>
                </Card>
            </form>
        </>
    )
}