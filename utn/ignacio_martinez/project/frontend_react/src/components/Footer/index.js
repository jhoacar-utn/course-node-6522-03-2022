import { AppBar } from "@mui/material";


export default function Footer() {

    return (
        <AppBar position="static" sx={{
            minHeight: '4vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p:0,
            m:0,
        }}>
            Created by Ignacio Martinez
        </AppBar>
    )
}