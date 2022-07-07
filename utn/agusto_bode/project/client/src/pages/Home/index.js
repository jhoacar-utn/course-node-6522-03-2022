import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div style={{
                display: "flow-root",
                padding: '30px',
                textAlign: "center"
            }}>
                <h1>WELCOME</h1>
                
                <h3>HOME PAGE</h3>

                <Button variant="contained" color="success">
                    <Link style={{ color: "white", textDecoration: "none" }} to="/login">Login</Link>
                </Button>
            </div>
        </>
    )
}