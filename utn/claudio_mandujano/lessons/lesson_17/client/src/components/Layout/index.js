import NavBar from "../Navbar/index";
import Footer from "../Footer";

export default function Layout({ children }) {

    return (
        <div>
            <NavBar></NavBar>
                {children}
            <Footer></Footer>
        </div>
    )
}