import NavBar from "../Navbar";
import Footer from "../Footer";
import { Card } from "@mui/material";


export default function Layout({ children }) {

  return (
    <div>
      <NavBar></NavBar>
      <Card sx={{
        minHeight: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00CCFA',
        color: 'black'
      }}>
        {children}
      </Card>
      <Footer></Footer>
    </div>
  )
}