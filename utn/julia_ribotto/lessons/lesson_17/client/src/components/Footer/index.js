import { AppBar } from '@mui/material';

export default function Footer () {
    return (
        <AppBar position="static" sx={{
            minHeight: '5vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontFamily:'sans-serif'
        }} >
        <div>
            Footer
        </div>
        </AppBar>
    )
}