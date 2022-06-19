import { Button, Card, FormHelperText, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useContext, useState } from 'react';
import { handleLogin } from "../../services/authentication"
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthorizationContext } from '../../context/authorization';
import { StoreContext } from '../../context/store';
import { CHANGE_LOGGED_IN } from '../../reducers/action';



export default function Login() {

    const [email, setEmanil] = useState("")
    const [password, setPassword] = useState("")
    /*  const { isloggedIn, setIsloggedInd } = useContext(AuthorizationContext) */
    const { globalState, setGlobalState } = useContext(StoreContext)
    const { isloggedIn } = globalState


    const handleChangeEmail = (event) => {
        setEmanil(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()


        handleLogin(email, password).then(() => {
            setGlobalState({
                type: CHANGE_LOGGED_IN,
                payload: true
            })
            toast.success('Succesfully logged')
        }).catch((error) => {
            console.log(error)
            toast.error('Error en el Login')
        })

    }

    return (
        <>
            {isloggedIn && <Navigate to='/dashboard'></Navigate>}
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
                    <FormControl>
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={password} onChange={handleChangePassword} />
                        <FormHelperText>Please type your Password</FormHelperText>
                    </FormControl>
                    <Button type='submit'>
                        Iniciar sesion
                    </Button>
                </Card>
            </form>
        </>
    )
} 