import { Button, Card, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useState, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { AuthorizationContext } from "../../context/authorization";
import { getAllCharacters } from "../../services/api";

export default function Register() {

    const { isLoggedIn } = useContext(AuthorizationContext);

    const [avatars, setAvatars] = useState([]);

    useEffect(() => {

        getAllCharacters()
            .then(result => {
                setAvatars(result)
            })
            .catch(error => {
                console.log(error);
            })

    }, []);
    // Si se especifica un array vacio, 
    // eso quiere decir que no depende de nada y solo se ejecuta la callback una sola vez


    const [registerState, setRegisterState] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    });

    const { name, email, password, avatar, image } = registerState;

    const handleSubmit = (event) => {
        console.log(event);
    }

    const handleChangeEmail = (event) => {
        setRegisterState({
            ...registerState,
            email: event.target.value
        });
    };

    const handleChangePassword = (event) => {
        setRegisterState({
            ...registerState,
            password: event.target.value
        })
    };

    const handleChangeName = (event) => {
        setRegisterState({
            ...registerState,
            name: event.target.value
        })
    };

    const handleChangeAvatar = (event) => {
        
        const newAvatar = event.target.value;
        
        const avatarObject = avatars.find((element)=>{
            return element.name === newAvatar
        });

        const newImage = avatarObject.image;

        setRegisterState({
            ...registerState,
            avatar: newAvatar,
            image: newImage
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
                        <Input type="text" value={name} onChange={handleChangeName} />
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }} >
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={password} onChange={handleChangePassword} />
                        <FormHelperText>Please type your password.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <Select value={avatar} onChange={handleChangeAvatar}>
                            {avatars.map((element)=>{
                                return (
                                    <MenuItem value={element.name}>{element.name}</MenuItem>
                                )
                            })}
                        </Select>
                        <FormHelperText>Please select an avatar.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        {
                            image.length > 0 &&
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