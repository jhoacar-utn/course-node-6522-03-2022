import { Button, Card, FormHelperText, Input, InputLabel, Grid, Paper, Avatar, TextField, Typography, Link, FormControl } from '@mui/material';
import { useContext, useState } from 'react';
import { handleLogin } from "../../services/authentication"
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthorizationContext } from '../../context/authorization';
import { StoreContext } from '../../context/store';
import { CHANGE_LOGGED_IN } from '../../reducers/action';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';




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
            toast.success('Successfully logged!')
            setGlobalState({
                type: CHANGE_LOGGED_IN,
                payload: true
            })
        }).catch((error) => {
            console.log(error)
            toast.error('Error en el Login')
        })

    }

    const paperStyle = { padding: 40, height: '50vh', width: 280, margin: "40px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '20px 0' }

    return (
        <>
            {isloggedIn && <Navigate to='/dashboard'></Navigate>}
            <form onSubmit={handleSubmit}>
                <Grid>
                    <Paper elevation={30} style={paperStyle}>
                        <Grid align='center' sx={{ padding: '20px' }}>
                            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                            <h2>Login </h2>
                        </Grid>
                        <TextField label='email' value={email} onChange={handleChangeEmail} type="email" placeholder='Enter Email' required />
                        <TextField label='password' value={password} onChange={handleChangePassword} placeholder='Enter password' type='password' required />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    </Paper>
                </Grid>
            </form>
        </>
    )
} 