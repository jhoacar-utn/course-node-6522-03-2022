import { Button, Card, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
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
                    <FormControl >
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl >
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={password} onChange={handleChangePassword} />
                        <FormHelperText>Please type your password.</FormHelperText>
                    </FormControl>
                    <Button type="submit">
                        Iniciar sesion
                    </Button>
                </Card>
            </form>
        </>
    )
}