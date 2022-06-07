import { Button, Card, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { useState } from 'react';
import { handleLogin } from '../services/authentication';

export default function Login() {

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event)=>{
        setEmail(event.target.value);
    };

    const handleChangePassword  = (event)=>{
        setPassword(event.target.value)
    };

    const handleSubmit = (event)=>{

        event.preventDefault();

        handleLogin(email, password).then(result=>{

            if(result.error){
                console.log("Hay un error");
                console.log(result.error)
            }
            if(result.success)
            {
                console.log("Se ha logueado satisfactoriamente");
                console.log(result.success);
            }
        });
    }

    return (
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
                    <Input type="email" value={email} onChange={handleChangeEmail}/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl >
                    <InputLabel>Password</InputLabel>
                    <Input type="password" value={password} onChange={handleChangePassword}/>
                    <FormHelperText>Please type your password.</FormHelperText>
                </FormControl>
                <Button type="submit">
                    Iniciar sesion
                </Button>
            </Card>
        </form>
    )
}