import Footer from "../Footer";
import NavBar from "../NavBar";
import { Card } from '@mui/material';



export default function Layout ({children}) {
    return (
        <div>
            <NavBar></NavBar>
            <Card sx={{ 
                minHeight: '84vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: 'white',
                color:'black',
                fontFamily:'sans-serif'
            }}>
                {children}
            </Card>
            <Footer></Footer>
        </div>
    )
}