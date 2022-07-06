import Navbar from "../Navbar"
import Footer from "../Footer"
import { Card } from '@mui/material'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <Card sx={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                color: 'black'
            }}>
                {children}
            </Card>
            <Footer />
        </div>
    )
}