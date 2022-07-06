import { accordionActionsClasses, Button, Card, FormControl, FormHelperText, Avatar, Input, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { useContext, useEffect, useReducer, useState } from "react"
import { Navigate } from "react-router-dom"
import { AuthorizationContext } from "../../context/authorization"
import { getAllCharacter } from '../../services/api'
import { handleRegister } from '../../services/authentication'
import { toast } from 'react-hot-toast'
import reducerFunction from "./reducer"
import { CHANGE_AVATAR_AND_IMAGE, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD } from "./actions"
import { StoreContext } from "../../context/store"

import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

export default function Register() {

    const { globalState } = useContext(StoreContext)
    const { isloggedIn } = globalState

    const [avatars, setAvatars] = useState([])

    useEffect(() => {
        getAllCharacter()
            .then(result => (
                setAvatars(result)
            ))
            .catch(error => (
                console.log(error)
            ))
    }, [])



    const [registerState, dispatch] = useReducer(reducerFunction, {
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    })

    const { name, email, password, avatar, image } = registerState

    const handleSubmit = (event) => {
        event.preventDefault()

        const userData = {
            name,
            email,
            password,
            avatar,
            image
        }

        handleRegister(userData).then(() => {
            toast.success('Registared successfully')
        }).catch((error) => {
            console.log(error)
            toast.error('Error en el Registro')
        })
    }

    const handleChangeEmail = (event) => {
        dispatch({
            type: CHANGE_EMAIL,
            payload: event.target.value
        })
    }

    const handleChangePassword = (event) => {
        dispatch({
            type: CHANGE_PASSWORD,
            payload: event.target.value
        })
    }

    const handleChangeName = (event) => {
        dispatch({
            type: CHANGE_NAME,
            payload: event.target.value
        })
    }


    const handleChangeAvatar = (event) => {
        const newAvatar = event.target.value

        const avatarObject = avatars.find((element) => {
            return element.name === newAvatar
        })

        const newImage = avatarObject.image
        dispatch({
            type: CHANGE_AVATAR_AND_IMAGE,
            payload: {
                avatar: newAvatar,
                image: newImage
            }
        })
    }

    const avatarStyle = { backgroundColor: '#1bbd7e' }



    return (
        <>
            {isloggedIn && <Navigate to='/dashboard'></Navigate>}
            <form onSubmit={handleSubmit}>
                <Card elevation={30} sx={{
                    marginTop: '20px',
                    marginBlockEnd: '20px',
                    minHeight: '200px',
                    minWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '10px'
                }}>
                    <Grid align='center' sx={{ padding: '30px' }}>
                        <Avatar style={avatarStyle}><HowToRegOutlinedIcon /></Avatar>
                        <h2>Sing In </h2>
                    </Grid>
                    <FormControl sx={{
                        width: '50%'
                    }}>
                        <InputLabel>User Name</InputLabel>
                        <Input type="text" value={name} onChange={handleChangeName} required />
                    </FormControl>
                    <FormControl sx={{
                        width: '50%'
                    }}>
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} required />
                        
                    </FormControl>
                    <FormControl sx={{
                        width: '50%'
                    }}>
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={password} onChange={handleChangePassword} required />
                        <FormHelperText>Please type your Password</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: '50%'
                    }}>
                        <Select value={avatar} onChange={handleChangeAvatar} required>
                            {avatars.map((element) => {
                                return (
                                    <MenuItem value={element.name} key={element.name}>{element.name}</MenuItem>
                                )
                            })}
                        </Select>
                        <FormHelperText>Please select an avatar</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: '50%'
                    }}>
                        {image.length > 0 &&
                            <img src={image} />
                        }
                    </FormControl>
                    <Button type='submit' sx={{
                        padding: '20px',
                    }}>
                        Registrar
                    </Button>
                </Card>
            </form>
        </>
    )
}