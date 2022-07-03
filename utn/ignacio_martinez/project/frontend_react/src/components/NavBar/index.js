import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { AuthorizationContext } from '../../context/authorization';
import { saveToken } from '../../services/authentication';
import CustomizedSwitches from "../themeSwitch";
import { ThemeContext } from '../../context/theme';

export default function NavBar() {

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthorizationContext);

  const {isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleLogout =  ( )=>{
    setIsLoggedIn(false);
    saveToken("");
  }

  const handleChangeTheme = ()=> {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <button onClick={handleChangeTheme} className={styles['switch-theme']}>
          <CustomizedSwitches onClick={handleChangeTheme}></CustomizedSwitches>
          </button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={styles['navbar-link']} to="/">Avatar App</Link>
          </Typography>

          {
            !isLoggedIn && <>
              <Button color="inherit">
                <Link className={styles['navbar-link']} to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link className={styles['navbar-link']} to="/register">Register</Link>
              </Button>
            </>
          }

          {
            isLoggedIn && <>
              <Button color="inherit">
                <Link className={styles['navbar-link']} to="/dashboard">Dashboard</Link>
              </Button>
              <Button onClick={handleLogout} color="inherit">Logout</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
