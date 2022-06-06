import { Button, Card, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

export default function Login() {
    return (
        <form>
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
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl >
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="password" aria-describedby="password-helper-text" />
                    <FormHelperText id="password-helper-text">Please type your password.</FormHelperText>
                </FormControl>
                <Button type="submit">
                    Iniciar sesion
                </Button>
            </Card>
        </form>
    )
}