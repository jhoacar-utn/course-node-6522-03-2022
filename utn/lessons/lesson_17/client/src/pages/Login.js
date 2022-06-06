import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

export default function Login() {
    return (
        <div>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '50px'
            }}>
                <FormControl >
                    <InputLabel style={{ color: 'black' }} htmlFor="my-input">Email address</InputLabel>
                    <Input style={{ color: 'black' }} id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText style={{ color: 'black' }} id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl >
                    <InputLabel style={{ color: 'black' }} htmlFor="my-input">Password</InputLabel>
                    <Input style={{ color: 'black' }} id="password" aria-describedby="password-helper-text" />
                    <FormHelperText style={{ color: 'black' }} id="password-helper-text">Please type your password.</FormHelperText>
                </FormControl>
                <Button type="submit">
                    Iniciar sesion
                </Button>
            </form>
        </div>
    )
}