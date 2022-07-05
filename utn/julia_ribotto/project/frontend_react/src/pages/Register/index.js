import { Button, Card, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useContext, useState, useReducer } from "react";
import { Navigate } from "react-router-dom";
import { getAllCharacters } from '../../services/api';
import { handleRegister } from "../../services/authentication";
import toast from 'react-hot-toast';
import reducerFunction from "./reducer";
import { changeAvatarAndImage, changeEmail, changeName, changePassword } from "./actions";
import { StoreContext } from "../../context/store";

export default function Register() {

    const { globalState } = useContext(StoreContext);
    const { isLoggedIn } = globalState;

    const [avatars, setAvatars] = useState([]);


    useEffect(() => {
        getAllCharacters()
            .then(result => {
                setAvatars(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    const [registerState, setRegisterState] = useReducer(reducerFunction, {
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    });

    const { name, email, password, avatar, image } = registerState;

    const handleSubmit = (event) => {

        event.preventDefault();

        const userData = {
            name,
            email,
            password,
            avatar,
            image
        }

        handleRegister(userData).then(() => {

            toast.success('Registered succesfully!');

        }).catch((error)=>{

            toast.error("Couldn't register");
            console.log(error);

        });
    };

    const handleChangeEmail = (event) => {
        setRegisterState(changeEmail(event.target.value));
    };

    const handleChangePassword = (event) => {
        setRegisterState(changePassword(event.target.value));
    };

    const handleChangeName = (event) => {
        setRegisterState(changeName(event.target.value));
    };

    const handleChangeAvatar = (event) => {

        const newAvatar = event.target.value;

        const newAvatarObject = avatars.find(element=>{
            return element.name === newAvatar
        });

        const newImage = newAvatarObject.image;

        setRegisterState(changeAvatarAndImage(newAvatar, newImage));
        
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '50px',
                    padding: '50px',
                    borderRadius: '5px'
                }}>
                    <FormControl sx={{
                        width: '40%'
                    }}>
                        <InputLabel>Name</InputLabel>
                        <Input type='text' value={name} onChange={handleChangeName} />
                        <FormHelperText>Please type your password</FormHelperText>
                    </FormControl>

                    <FormControl sx={{
                        width: '40%'
                    }}>
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>

                    <FormControl sx={{
                        width: '40%'
                    }}>
                        <InputLabel>Password</InputLabel>
                        <Input type='password' value={password} onChange={handleChangePassword} />
                        <FormHelperText>Please type your password</FormHelperText>
                    </FormControl>

                    <FormControl sx={{
                        width: '40%'
                    }} variant="standard">
                        <InputLabel sx={{

                        }}>User avatar</InputLabel>
                        <Select value={avatar} onChange={handleChangeAvatar}>
                            
                            {avatars.map((element)=>{
                                return (
                                    <MenuItem key={element.name} value={element.name} alt={element.name}>{element.name}</MenuItem> 
                                )
                            })}
                        </Select>
                        <FormHelperText>Please select an avatar</FormHelperText>
                    </FormControl>

                    <FormControl>
                        {
                            image.length > 0 && <img style={{borderRadius:'50%', width:'200px'}} src={image} alt={avatar.name}></img>
                        }

                    </FormControl>

                    <Button type="submit" variant="contained" sx={{
                        backgroundColor: 'black',
                        border: '2px solid white',
                        color: 'white'
                    }}>
                        Registrarse
                    </Button>

                </Card >
            </form>
        </>
    )
}