import NavBar from "../Navbar/index";
import Footer from "../Footer";
import { Card } from "@mui/material";



export default function Layout({ children }) {

    return (
        <div>
            <NavBar></NavBar>
                <Card sx={{
                    minHeight: '85vh',
                    display: 'flex' ,
                    justifyContent: 'center',
                    alignItems: 'center',
                    color:'black',
                    backgroundColor: 'rgb(12, 176, 241)'

                }}>
                    {children}
                </Card>
            <Footer></Footer>
        </div>
    )
}