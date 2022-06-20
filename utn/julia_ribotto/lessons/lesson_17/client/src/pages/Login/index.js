import { Button, Card, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { handleLogin } from '../../services/authentication';
import { Navigate } from "react-router-dom";
import { AuthorizationContext } from '../../context/authorization';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthorizationContext);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        handleLogin(email, password).then(() => {

            toast.success('You are logged in');
            setIsLoggedIn(true);

        }).catch((error)=>{

            toast.error("Couldn't log in");
            console.log(error);

        });
    }


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

                    <FormControl>
                        <InputLabel>Email address</InputLabel>
                        <Input type='email' value={email} onChange={handleChangeEmail} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input type='password' value={password} onChange={handleChangePassword} />
                        <FormHelperText>Please type your password</FormHelperText>
                    </FormControl>

                    <Button type="submit" variant="contained" sx={{
                        backgroundColor: 'black',
                        border: '2px solid white',
                        color: 'white'
                    }}>
                        Iniciar sesión
                    </Button>



                </Card >
            </form>
        </>
    )
}