import React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AuthorizationContext } from '../../context/authorization';
import { saveToken } from '../../services/authentication';
import { ThemeContext } from '../../context/theme';
import { StoreContext } from '../../context/store';
import { CHANGE_DARK_MODE, CHANGE_LOGGED_IN } from '../../reducers/action';

export default function NavBar() {

  const { globalState, setGlobalState } = useContext(StoreContext);
  const { isLoggedIn, isDarkMode } = globalState;

  const handleChangeTheme = () => {
    setGlobalState({
      type: CHANGE_DARK_MODE,
      payload: !globalState.isDarkMode
    })
  }

  const handleLogOut = () => {
    setGlobalState({
      type: CHANGE_LOGGED_IN,
      payload: false
    })
    saveToken("");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        minHeight: '5vh'
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={styles['navbar-link']} to='/'>My App</Link>
          </Typography>

          {!isLoggedIn && <>
            <Button color="inherit">
              <Link className={styles['navbar-link']} to='/login'>Login</Link>
            </Button>
            <Button color="inherit">
              <Link className={styles['navbar-link']} to='/register'>Register</Link>
            </Button>
          </>}

          {isLoggedIn && <>
            <Button color="inherit">
              <Link className={styles['navbar-link']} to='/dashboard'>Dashboard</Link>
            </Button>
            <Button onClick={handleLogOut} color="inherit">Logout</Button>
          </>}

          <Button onClick={handleChangeTheme}>
            {
              isDarkMode && <DarkModeIcon  sx={{
                color:'white'
              }}/>
            }
            {
              !isDarkMode && <LightModeIcon  sx={{
                color:'white'
              }}/>
            }
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
