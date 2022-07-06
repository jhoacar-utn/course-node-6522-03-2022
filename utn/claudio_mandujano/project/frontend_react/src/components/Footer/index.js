import { AppBar } from "@mui/material";


export default function Footer() {

  return (
    <AppBar position="static" sx={{
      minHeight: '10vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      Hecho por Claudio Mandujano
    </AppBar>
  )
}