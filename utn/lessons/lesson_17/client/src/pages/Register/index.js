import { Button, Card, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { AuthorizationContext } from "../../context/authorization"

export default function Register() {

    const { isLoggedIn } = useContext(AuthorizationContext);
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
        setRegisterState({
            ...registerState,
            avatar: event.target.value
        })
    };

    const handleChangeImage = (event) => {
        setRegisterState({
            ...registerState,
            image: event.target.value
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
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
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